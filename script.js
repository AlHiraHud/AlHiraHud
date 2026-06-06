


 document.addEventListener("DOMContentLoaded", () => {
  const prayerSchedule = [   
  
  { date: "2026-06-01", times: { Fajr: "02:00", Sunrise: "04:39", Dhuhr: "13:05", Asr: "18:43", Maghrib: "21:32", Isha: "22:30" } },
  { date: "2026-06-02", times: { Fajr: "02:00", Sunrise: "04:38", Dhuhr: "13:05", Asr: "18:43", Maghrib: "21:33", Isha: "22:30" } },
  { date: "2026-06-03", times: { Fajr: "02:00", Sunrise: "04:37", Dhuhr: "13:05", Asr: "18:44", Maghrib: "21:34", Isha: "22:30" } },
  { date: "2026-06-04", times: { Fajr: "02:00", Sunrise: "04:37", Dhuhr: "13:05", Asr: "18:45", Maghrib: "21:35", Isha: "22:30" } },
  { date: "2026-06-05", times: { Fajr: "02:00", Sunrise: "04:36", Dhuhr: "13:06", Asr: "18:45", Maghrib: "21:36", Isha: "22:30" } },
  { date: "2026-06-06", times: { Fajr: "02:00", Sunrise: "04:35", Dhuhr: "13:06", Asr: "18:46", Maghrib: "21:37", Isha: "22:30" } },
  { date: "2026-06-07", times: { Fajr: "02:00", Sunrise: "04:35", Dhuhr: "13:06", Asr: "18:46", Maghrib: "21:38", Isha: "22:30" } },
  { date: "2026-06-08", times: { Fajr: "02:00", Sunrise: "04:34", Dhuhr: "13:06", Asr: "18:47", Maghrib: "21:39", Isha: "22:30" } },
  { date: "2026-06-09", times: { Fajr: "02:00", Sunrise: "04:33", Dhuhr: "13:06", Asr: "18:48", Maghrib: "21:40", Isha: "22:30" } },
  { date: "2026-06-10", times: { Fajr: "02:00", Sunrise: "04:33", Dhuhr: "13:07", Asr: "18:48", Maghrib: "21:41", Isha: "22:30" } },
  { date: "2026-06-11", times: { Fajr: "02:00", Sunrise: "04:33", Dhuhr: "13:07", Asr: "18:49", Maghrib: "21:41", Isha: "22:30" } },
  { date: "2026-06-12", times: { Fajr: "02:00", Sunrise: "04:32", Dhuhr: "13:07", Asr: "18:49", Maghrib: "21:42", Isha: "22:30" } },
  { date: "2026-06-13", times: { Fajr: "02:00", Sunrise: "04:32", Dhuhr: "13:07", Asr: "18:50", Maghrib: "21:43", Isha: "22:30" } },
  { date: "2026-06-14", times: { Fajr: "02:00", Sunrise: "04:32", Dhuhr: "13:07", Asr: "18:50", Maghrib: "21:43", Isha: "22:30" } },
  { date: "2026-06-15", times: { Fajr: "02:00", Sunrise: "04:32", Dhuhr: "13:08", Asr: "18:50", Maghrib: "21:44", Isha: "22:30" } },
  { date: "2026-06-16", times: { Fajr: "02:00", Sunrise: "04:32", Dhuhr: "13:08", Asr: "18:51", Maghrib: "21:44", Isha: "22:30" } },
  { date: "2026-06-17", times: { Fajr: "02:00", Sunrise: "04:31", Dhuhr: "13:08", Asr: "18:51", Maghrib: "21:45", Isha: "22:30" } },
  { date: "2026-06-18", times: { Fajr: "02:00", Sunrise: "04:31", Dhuhr: "13:08", Asr: "18:51", Maghrib: "21:45", Isha: "22:30" } },
  { date: "2026-06-19", times: { Fajr: "02:00", Sunrise: "04:32", Dhuhr: "13:09", Asr: "18:52", Maghrib: "21:46", Isha: "22:30" } },
  { date: "2026-06-20", times: { Fajr: "02:00", Sunrise: "04:32", Dhuhr: "13:09", Asr: "18:52", Maghrib: "21:46", Isha: "22:30" } },
  { date: "2026-06-21", times: { Fajr: "02:00", Sunrise: "04:32", Dhuhr: "13:09", Asr: "18:52", Maghrib: "21:46", Isha: "22:30" } },
  { date: "2026-06-22", times: { Fajr: "02:00", Sunrise: "04:32", Dhuhr: "13:09", Asr: "18:52", Maghrib: "21:46", Isha: "22:30" } },
  { date: "2026-06-23", times: { Fajr: "02:00", Sunrise: "04:32", Dhuhr: "13:09", Asr: "18:52", Maghrib: "21:46", Isha: "22:30" } },
  { date: "2026-06-24", times: { Fajr: "02:00", Sunrise: "04:33", Dhuhr: "13:10", Asr: "18:53", Maghrib: "21:46", Isha: "22:30" } },
  { date: "2026-06-25", times: { Fajr: "02:00", Sunrise: "04:33", Dhuhr: "13:10", Asr: "18:53", Maghrib: "21:46", Isha: "22:30" } },
  { date: "2026-06-26", times: { Fajr: "02:00", Sunrise: "04:34", Dhuhr: "13:10", Asr: "18:53", Maghrib: "21:46", Isha: "22:30" } },
  { date: "2026-06-27", times: { Fajr: "02:00", Sunrise: "04:34", Dhuhr: "13:10", Asr: "18:53", Maghrib: "21:46", Isha: "22:30" } },
  { date: "2026-06-28", times: { Fajr: "02:00", Sunrise: "04:35", Dhuhr: "13:10", Asr: "18:53", Maghrib: "21:46", Isha: "22:30" } },
  { date: "2026-06-29", times: { Fajr: "02:00", Sunrise: "04:35", Dhuhr: "13:11", Asr: "18:53", Maghrib: "21:46", Isha: "22:30" } },
  { date: "2026-06-30", times: { Fajr: "02:00", Sunrise: "04:36", Dhuhr: "13:11", Asr: "18:53", Maghrib: "21:45", Isha: "22:30" } },

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

function resetTasbih() {
  tasbihCount = 0;
  currentPhraseIndex = 0;
  document.getElementById("count").innerText = tasbihCount;
  document.getElementById("phrase").innerText = phrases[currentPhraseIndex];
}