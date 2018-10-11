const SlackBot = require('slackbots');
const axios = require('axios');

const bot = new SlackBot({
  token: 'xoxb-297500842881-452967759860-Jg4qzI0a8sZg75QWYiIsoVtd',
  name: 'sjokz'
})

//Start bot

bot.on('start', () => {
  const params = {
    icon_emoji: '',
  };

  bot.postMessageToChannel(
    'test',
    "On va s'amuser avec @sjokz",
    params,
  );
});

// Receive message
bot.on('message', data => {
  if (data.type !== 'message') {
    return;
  }
  handleMessage(data.text);
});

function handleMessage(message) {
  if (message.includes('chuck')) {
    chuckJoke();
  } else if (message.includes('yomama')) {
    yoMamaJoke();
  } else if (message.includes('bonjour')) {
    helloMessage();
  } else if (message.includes('ux')) {
    helloBigMessage();
  } else if (message.includes('mdr')) {
    lolMessage();
  } else if (message.includes('histoire')) {
    randomDate();
  } else if (message.includes('rs')) {
    instaSjokz();
  } else if (message.includes('fnc')) {
    fncFan();
  } else if (message.includes('@Benash')) {
    benJoke();
  }
}

function benJoke() {
    const params = {
        icon_emoji: '',
    };

    bot.postMessageToChannel(
        'general',
        'Hey le chômeur on te parle !',
        params,
    );
}

function fncFan() {
    const params = {
        icon_emoji: '',
    };

    bot.postMessageToChannel(
        'general',
        'J\'ai sucé Rekkles !',
        params,
    );
}

function instaSjokz() {
  const params = {
    icon_emoji: '',
  };

  bot.postMessageToChannel(
    'general',
    'POULOULOU https://www.instagram.com/eefjah/',
    params,
  );
}

function randomDate() {
  axios.get('http://numbersapi.com/random/date?json').then(res => {
    const blague = res.data.text;

    const params = {
      icon_emoji: '',
    };

    bot.postMessageToChannel(
      'general',
      blague,
      params,
    );
  });
}

function chuckJoke() {
  axios.get('http://api.icndb.com/jokes/random').then(res => {
    const blague = res.data.value.joke;

    const params = {
      icon_emoji: '',
    };

    bot.postMessageToChannel(
      'general',
      blague,
      params,
    );
  });
}

function yoMamaJoke() {
  axios.get('http://api.yomomma.info').then(res => {
    const blagueMama = res.data.joke;

    const params = {
      icon_emoji: '',
    };

    bot.postMessageToChannel(
      'general',
      blagueMama,
      params,
    );
  });
}

function helloMessage() {
  const params = {
    icon_emoji: '',
  };

  bot.postMessageToChannel(
    'general',
    'Bonjour Batard',
    params,
  );
}

function helloBigMessage() {
  const params = {
    icon_emoji: '',
  };

  bot.postMessageToChannel(
    'general',
    'L\'UX c\'est trop naze vive le dev',
    params,
  );
}

function lolMessage() {
  const params = {
    icon_emoji: '',
  };

  bot.postMessageToChannel(
    'general',
    'Trop lolilol',
    params,
  );
}