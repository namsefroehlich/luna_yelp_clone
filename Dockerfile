FROM continuumio/miniconda3:latest

ENV LANG=C.UTF-8 LC_ALL=C.UTF-8

RUN apt-get update && apt-get upgrade -y && apt-get install -qqy \
    wget \
    bzip2 \
    graphviz

RUN curl -sL https://deb.nodesource.com/setup_10.x | bash - && apt-get install -y nodejs && apt-get install -y npm

RUN mkdir -p /app

COPY ./app/requirements.yml /app/requirements.yml

RUN /opt/conda/bin/conda env create -f /app/requirements.yml

ENV PATH /opt/conda/envs/luna_env/bin:$PATH

RUN echo "source activate luna_env" >~/.bashrc

# create a scripts folder
RUN mkdir -p /scripts
COPY ./scripts /scripts
RUN chmod +x ./scripts*

COPY ./app /app

RUN mkdir -p /frontend
RUN mkdir -p /frontend_tmp

WORKDIR frontend_tmp

COPY ./frontend/package.json /frontend_tmp/
RUN npm i
COPY ./frontend /frontend_tmp
RUN npm run build

WORKDIR /app
