export function mountEvent({ prize, winner, key, date, name, mode }) {
  if (mode === "delete") {
    return {
      key: {
        "@assetType": "event",
        "@key": key,
      },
    };
  }
  if (mode === "create") {
    const send = {
      asset: [
        {
          "@assetType": "event",
          date: new Date(date).toISOString(),
          name: name,
          prize: parseInt(prize),
          winner: {
            "@assetType": "team",
            "@key": winner,
          },
        },
      ],
    };
    return send;
  }
  return {
    update: {
      "@assetType": "event",
      "@key": key,
      prize: prize,
      winner: {
        "@assetType": "team",
        "@key": winner,
      },
    },
  };
}

export function mountTeam({ name, key, mode }) {
  if (mode === "delete") {
    return {
      key: {
        "@assetType": "team",
        "@key": key,
      },
    };
  }
  if (mode === "create") {
    const send = {
      asset: [
        {
          "@assetType": "team",
          id: Math.random() * 10,
          name: name,
        },
      ],
    };
    return send;
  }
  return {
    update: {
      "@assetType": "team",
      "@key": key,
      name: name,
    },
  };
}

export function mountDriver({ name, team, key, mode }) {
  console.log(key);
  if (mode === "delete") {
    return {
      key: {
        "@assetType": "driver",
        "@key": key,
      },
    };
  }
  if (mode === "create") {
    const send = {
      asset: [
        {
          "@assetType": "driver",
          id: Math.random() * 10,
          name: name,
          team: {
            "@assetType": "team",
            "@key": team,
          },
        },
      ],
    };
    return send;
  }
  return {
    update: {
      "@assetType": "driver",
      "@key": key,
      name: name,
      team: {
        "@assetType": "team",
        "@key": team,
      },
    },
  };
}

export function mountCar({ model, driver, key, mode }) {
  if (mode === "delete") {
    return {
      key: {
        "@assetType": "car",
        "@key": key,
      },
    };
  }
  if (mode === "create") {
    const send = {
      asset: [
        {
          "@assetType": "car",
          id: Math.random() * 10,
          model: model,
          driver: {
            "@assetType": "driver",
            "@key": driver,
          },
        },
      ],
    };
    return send;
  }
  return {
    update: {
      "@assetType": "car",
      "@key": key,
      model: model,
      driver: {
        "@assetType": "driver",
        "@key": driver,
      },
    },
  };
}
