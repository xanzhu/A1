FROM nginx:1.19.3

# Remove sym links from nginx image
RUN rm /var/log/nginx/access.log
RUN rm /var/log/nginx/error.log

# Install logrotate
RUN apt-get update && apt-get -y install logrotate

# Copy MyApp nginx config
COPY config/nginx.conf /etc/nginx/nginx.conf

#Copy logrotate nginx configuration
COPY config/logrotate.d/nginx /etc/logrotate.d/

# Start nginx and cron as a service
CMD service cron start && nginx -g 'daemon off;'