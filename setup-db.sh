#!/bin/bash

# Database Setup Script for duo-tone-folio
echo "Setting up duo-tone-folio database..."

# Check if PostgreSQL is installed
if ! command -v psql &> /dev/null; then
    echo "PostgreSQL is not installed. Please install it first."
    echo "Ubuntu/Debian: sudo apt-get install postgresql postgresql-contrib"
    echo "macOS: brew install postgresql"
    exit 1
fi

# Database configuration
DB_NAME="duo_tone_folio"
DB_USER="${DB_USER:-postgres}"
DB_PASSWORD="${DB_PASSWORD:-password}"
DB_HOST="${DB_HOST:-localhost}"
DB_PORT="${DB_PORT:-5432}"

echo "Creating database: $DB_NAME"

# Create database
sudo -u postgres createdb $DB_NAME 2>/dev/null || echo "Database $DB_NAME already exists"

# Create user if needed
sudo -u postgres psql -c "CREATE USER $DB_USER WITH PASSWORD '$DB_PASSWORD';" 2>/dev/null || echo "User $DB_USER already exists"

# Grant privileges
sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE $DB_NAME TO $DB_USER;"
sudo -u postgres psql -d $DB_NAME -c "GRANT ALL ON SCHEMA public TO $DB_USER;"

echo "Database setup complete!"
echo "Database URL: postgresql://$DB_USER:$DB_PASSWORD@$DB_HOST:$DB_PORT/$DB_NAME"
echo ""
echo "Update your .env.local file with:"
echo "DATABASE_URL=postgresql://$DB_USER:$DB_PASSWORD@$DB_HOST:$DB_PORT/$DB_NAME"