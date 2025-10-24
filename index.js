const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// ✅ Replace with IDs of groups or users allowed to use your script
const allowedIds = [33772211, 457215695];

app.get("/check", (req, res) => {
  const id = parseInt(req.query.id);
  const type = req.query.type;

  if (allowedIds.includes(id)) {
    res.json({ authorized: true });
  } else {
    res.json({ authorized: false });
  }
});

app.listen(PORT, () => console.log(`✅ Whitelist API running on port ${PORT}`));

