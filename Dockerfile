FROM likec4/likec4:latest
 
USER root
 
RUN apt-get update && \
    apt-get install -y socat tini && \
    rm -rf /var/lib/apt/lists/*
 
EXPOSE 8080
 
ENTRYPOINT ["/usr/bin/tini", "-s", "--"]
 
CMD sh -c "socat TCP-LISTEN:8080,fork TCP:127.0.0.1:5173 & exec likec4 start"