FROM aquabotwa/sanuwa-official:md-beta

RUN git clone https://github.com/edm-official/edmbot /root/edm
WORKDIR /root/edm/
ENV TZ=Europe/Istanbul
RUN yarn add supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
