


 document.addEventListener("DOMContentLoaded", () => {
  const prayerSchedule = [   
  
{ date: "2026-02-01", times: { Fajr: "05:51", Sunrise: "07:48", Dhuhr: "12:21", Asr: "14:59", Maghrib: "16:54", Isha: "18:51" } },
{ date: "2026-02-02", times: { Fajr: "05:50", Sunrise: "07:46", Dhuhr: "12:21", Asr: "15:01", Maghrib: "16:56", Isha: "18:52" } },
{ date: "2026-02-03", times: { Fajr: "05:49", Sunrise: "07:44", Dhuhr: "12:21", Asr: "15:03", Maghrib: "16:58", Isha: "18:54" } },
{ date: "2026-02-04", times: { Fajr: "05:47", Sunrise: "07:43", Dhuhr: "12:21", Asr: "15:05", Maghrib: "17:00", Isha: "18:56" } },
{ date: "2026-02-05", times: { Fajr: "05:46", Sunrise: "07:41", Dhuhr: "12:21", Asr: "15:07", Maghrib: "17:02", Isha: "18:58" } },
{ date: "2026-02-06", times: { Fajr: "05:44", Sunrise: "07:39", Dhuhr: "12:21", Asr: "15:09", Maghrib: "17:04", Isha: "18:59" } },
{ date: "2026-02-07", times: { Fajr: "05:42", Sunrise: "07:37", Dhuhr: "12:21", Asr: "15:11", Maghrib: "17:06", Isha: "19:01" } },
{ date: "2026-02-08", times: { Fajr: "05:41", Sunrise: "07:35", Dhuhr: "12:21", Asr: "15:12", Maghrib: "17:08", Isha: "19:03" } },
{ date: "2026-02-09", times: { Fajr: "05:39", Sunrise: "07:33", Dhuhr: "12:21", Asr: "15:14", Maghrib: "17:10", Isha: "19:04" } },
{ date: "2026-02-10", times: { Fajr: "05:37", Sunrise: "07:31", Dhuhr: "12:21", Asr: "15:16", Maghrib: "17:12", Isha: "19:06" } },
{ date: "2026-02-11", times: { Fajr: "05:36", Sunrise: "07:29", Dhuhr: "12:21", Asr: "15:18", Maghrib: "17:14", Isha: "19:08" } },
{ date: "2026-02-12", times: { Fajr: "05:34", Sunrise: "07:27", Dhuhr: "12:21", Asr: "15:20", Maghrib: "17:16", Isha: "19:10" } },
{ date: "2026-02-13", times: { Fajr: "05:32", Sunrise: "07:25", Dhuhr: "12:21", Asr: "15:22", Maghrib: "17:18", Isha: "19:11" } },
{ date: "2026-02-14", times: { Fajr: "05:30", Sunrise: "07:23", Dhuhr: "12:21", Asr: "15:23", Maghrib: "17:20", Isha: "19:13" } },
{ date: "2026-02-15", times: { Fajr: "05:28", Sunrise: "07:21", Dhuhr: "12:21", Asr: "15:25", Maghrib: "17:22", Isha: "19:15" } },
{ date: "2026-02-16", times: { Fajr: "05:26", Sunrise: "07:19", Dhuhr: "12:21", Asr: "15:27", Maghrib: "17:24", Isha: "19:17" } },
{ date: "2026-02-17", times: { Fajr: "05:25", Sunrise: "07:17", Dhuhr: "12:21", Asr: "15:29", Maghrib: "17:26", Isha: "19:19" } },
{ date: "2026-02-18", times: { Fajr: "05:23", Sunrise: "07:15", Dhuhr: "12:21", Asr: "15:31", Maghrib: "17:28", Isha: "19:21" } },

  ];

function updatePrayerTable() {
  const today = new Date().toISOString().split("T")[0];
  const todaySchedule = prayerSchedule.find(entry => entry.date === today);
  const tableDate = document.getElementById("table-date");

  if (!todaySchedule) {
    tableDate.innerText = "No schedule found for today.";
    return;
  }

  const dateObj = new Date(todaySchedule.date);
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = dateObj.toLocaleDateString('en-GB', options);
  tableDate.innerText = `Today is ${formattedDate}`;

  // Update prayer times
  Object.entries(todaySchedule.times).forEach(([name, time]) => {
    const cell = document.querySelector(`[data-prayer="${name}"]`);
    if (cell) cell.innerText = time;
  });

  // Clear previous row states
  document.querySelectorAll("td[data-prayer]").forEach(cell => {
    const row = cell.parentElement;
    row.classList.remove("past-prayer", "current-prayer", "next-prayer");
  });

  // Determine current and next prayer
  const now = new Date();
  const order = ["Fajr", "Sunrise", "Dhuhr", "Asr", "Maghrib", "Isha"];
  let current = null;
  let next = null;

  for (let i = 0; i < order.length; i++) {
    const timeStr = todaySchedule.times[order[i]];
    const [hh, mm] = timeStr.split(":").map(Number);
    const prayerTime = new Date();
    prayerTime.setHours(hh, mm, 0, 0);

    if (now >= prayerTime) {
      current = order[i];
    } else if (!next) {
      next = order[i];
    }
  }

  // Apply visual classes to rows
  order.forEach(name => {
    const cell = document.querySelector(`[data-prayer="${name}"]`);
    if (!cell) return;
    const row = cell.parentElement;

    if (name === current) {
      row.classList.add("current-prayer");
    } else if (name === next) {
      row.classList.add("next-prayer");
    } else {
      const [hh, mm] = todaySchedule.times[name].split(":").map(Number);
      const prayerTime = new Date();
      prayerTime.setHours(hh, mm, 0, 0);
      if (now > prayerTime) {
        row.classList.add("past-prayer");
      }
    }
  });
}

  function updateClock() {
    const now = new Date();
    const hh = String(now.getHours()).padStart(2, "0");
    const mm = String(now.getMinutes()).padStart(2, "0");
    const ss = String(now.getSeconds()).padStart(2, "0");
    const clock = document.getElementById("current-time");
    if (clock) clock.innerText = `Current Time: ${hh}:${mm}:${ss}`;
  }

  function getNextPrayer() {
    const now = new Date();
    const order = ["Fajr", "Sunrise", "Dhuhr", "Asr", "Maghrib", "Isha"];

    const sorted = prayerSchedule
      .map(entry => {
        const dayStart = new Date(entry.date);
        return order.map(name => {
          const t = entry.times[name];
          if (!t) return null;
          const [hh, mm] = t.split(":").map(Number);
          const timeObj = new Date(dayStart.getFullYear(), dayStart.getMonth(), dayStart.getDate(), hh, mm);
          return { name, timeStr: t, timeObj, date: entry.date };
        }).filter(Boolean);
      })
      .flat()
      .filter(p => p.timeObj > now);

    return sorted.length ? sorted[0] : null;
  }

  function updateNextPrayer() {
    const container = document.getElementById("next-prayer");
    const next = getNextPrayer();

    if (!next) {
      container.innerHTML = `
        🕌 Error prayer times cannot be displayed at this time.<br>
        <span style="font-size: 0.9em; color: #666;">
          We are sorry for any inconviniences. We are working on
        </span>`;
      container.className = "";
      return;
    }

    const now = new Date();
    const diff = Math.max(0, next.timeObj - now);
    const totalSec = Math.floor(diff / 1000);
    const hours = Math.floor(totalSec / 3600);
    const minutes = Math.floor((totalSec % 3600) / 60);
    const seconds = totalSec % 60;

    const dateObj = new Date(next.date);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = dateObj.toLocaleDateString('en-GB', options);

    container.innerHTML = `
      <strong>Next Prayer ${next.name}</strong> at ${next.timeStr}<br>
      <span style="font-size: 0.9em; color: #666;">On ${formattedDate}</span><br>
      <strong>Time Until:</strong> ${hours}h ${minutes}m ${seconds}s
    `;
    container.className = "";
  }

  // Initial run
  updateClock();
  updatePrayerTable();
  updateNextPrayer();

  // Keep updating every second
  setInterval(() => {
    updateClock();
    updatePrayerTable();
    updateNextPrayer();
  }, 1000);
});


const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});







function createLanternTrail() {
  const trail = document.getElementById("lanternTrail");
  for (let i = 0; i < 20; i++) {
    const lantern = document.createElement("div");
    lantern.classList.add("lantern");
    lantern.style.left = `${Math.random() * 100}%`;
    lantern.style.top = `${Math.random() * 100}%`;
    lantern.style.animationDelay = `${Math.random() * 10}s`;
    trail.appendChild(lantern);
  }
}

// Example trigger: only show at night or in Rawdah Mode
const hour = new Date().getHours();
const isNight = hour >= 20 || hour <= 5;
const rawdahMode = true; // or toggle this manually

if (isNight || rawdahMode) {
  createLanternTrail();
}

(function() {
  const now = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formatted = now.toLocaleDateString('en-GB', options);
  const el = document.getElementById("table-date");
  if (el) el.innerText = `Prayer Begining Times For ${formatted}`;
})();



let tasbihCount = 0;
let phrases = ["SubhanAllah", "Alhamdulillah", "Allahu Akbar"];
let currentPhraseIndex = 0;

function incrementTasbih() {
  tasbihCount++;
  document.getElementById("count").innerText = tasbihCount;

  // Optional: cycle phrase every 33 counts
  if (tasbihCount % 33 === 0) {
    currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
    document.getElementById("phrase").innerText = phrases[currentPhraseIndex];
  }
}

// Ramadan countdown

function updateRamadanCountdown() {
  const targetDate = new Date("2026-02-17T00:00:00"); // Ramadan start
  const now = new Date();
  const diff = targetDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  document.getElementById("days").textContent = String(days).padStart(2, '0');
  document.getElementById("hours").textContent = String(hours).padStart(2, '0');
  document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
}

setInterval(updateRamadanCountdown, 1000);


// Ramadan countdown endzz




let currentIndex = null; // will store index of today's schedule

document.addEventListener("DOMContentLoaded", () => {
  const today = new Date().toISOString().split("T")[0];
  currentIndex = prayerSchedule.findIndex(entry => entry.date === today);

  updatePrayerTable(currentIndex);

  document.getElementById("prev-day").addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updatePrayerTable(currentIndex);
    }
  });

  document.getElementById("next-day").addEventListener("click", () => {
    if (currentIndex < prayerSchedule.length - 1) {
      currentIndex++;
      updatePrayerTable(currentIndex);
    }
  });
});






function resetTasbih() {
  tasbihCount = 0;
  currentPhraseIndex = 0;
  document.getElementById("count").innerText = tasbihCount;
  document.getElementById("phrase").innerText = phrases[currentPhraseIndex];
}