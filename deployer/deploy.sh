#!/bin/bash
# ===========================================
# Deployment script for Alibaba Cloud server
# Serves static HTML files via Nginx
# ===========================================

set -e

APP_NAME="yujie-ai-html"
DEPLOY_DIR="/var/www/${APP_NAME}"
NGINX_CONF="/etc/nginx/sites-available/${APP_NAME}"
NGINX_ENABLED="/etc/nginx/sites-enabled/${APP_NAME}"
BACKUP_DIR="/var/backups/${APP_NAME}"

echo "========================================="
echo " Deploying ${APP_NAME}"
echo " $(date '+%Y-%m-%d %H:%M:%S')"
echo "========================================="

# --- 1. Install Nginx if not present ---
if ! command -v nginx &> /dev/null; then
    echo "[1/5] Installing Nginx..."
    sudo apt-get update -qq
    sudo apt-get install -y -qq nginx
else
    echo "[1/5] Nginx already installed."
fi

# --- 2. Backup current deployment ---
echo "[2/5] Backing up current deployment..."
if [ -d "$DEPLOY_DIR" ]; then
    sudo mkdir -p "$BACKUP_DIR"
    TIMESTAMP=$(date '+%Y%m%d_%H%M%S')
    sudo cp -r "$DEPLOY_DIR" "${BACKUP_DIR}/backup_${TIMESTAMP}"
    # Keep only last 3 backups
    cd "$BACKUP_DIR" && ls -dt backup_* | tail -n +4 | xargs -r sudo rm -rf
    echo "    Backup saved: backup_${TIMESTAMP}"
else
    echo "    No previous deployment to backup."
fi

# --- 3. Deploy files ---
echo "[3/5] Deploying files to ${DEPLOY_DIR}..."
sudo mkdir -p "$DEPLOY_DIR"
sudo rsync -a --delete \
    --exclude='.git' \
    --exclude='.github' \
    --exclude='deployer' \
    --exclude='.qoder' \
    --exclude='.workbuddy' \
    --exclude='*.py' \
    --exclude='*.md' \
    /tmp/${APP_NAME}-source/ "$DEPLOY_DIR/"
sudo chown -R www-data:www-data "$DEPLOY_DIR"
sudo chmod -R 755 "$DEPLOY_DIR"

# --- 4. Configure Nginx ---
echo "[4/5] Configuring Nginx..."
sudo cp "$(dirname "$0")/nginx.conf" "$NGINX_CONF"

if [ ! -L "$NGINX_ENABLED" ]; then
    sudo ln -sf "$NGINX_CONF" "$NGINX_ENABLED"
fi

# Remove default site if exists
if [ -L /etc/nginx/sites-enabled/default ]; then
    sudo rm -f /etc/nginx/sites-enabled/default
fi

# Test Nginx config
sudo nginx -t

# --- 5. Reload Nginx ---
echo "[5/5] Reloading Nginx..."
if systemctl is-active --quiet nginx; then
    sudo systemctl reload nginx
else
    sudo systemctl start nginx
    sudo systemctl enable nginx
fi

echo "========================================="
echo " Deployment complete!"
echo " Site is live at http://$(hostname -I | awk '{print $1}')"
echo "========================================="
