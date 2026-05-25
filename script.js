


 document.addEventListener("DOMContentLoaded", () => {
  const prayerSchedule = [   
  
  { date: "2026-05-01", times: { Fajr: "02:45", Sunrise: "05:27", Dhuhr: "13:04", Asr: "18:14", Maghrib: "20:43", Isha: "22:13" } },
  { date: "2026-05-02", times: { Fajr: "02:40", Sunrise: "05:25", Dhuhr: "13:04", Asr: "18:15", Maghrib: "20:44", Isha: "22:18" } },
  { date: "2026-05-03", times: { Fajr: "02:36", Sunrise: "05:23", Dhuhr: "13:04", Asr: "18:16", Maghrib: "20:46", Isha: "22:18" } },
  { date: "2026-05-04", times: { Fajr: "02:30", Sunrise: "05:21", Dhuhr: "13:04", Asr: "18:17", Maghrib: "20:48", Isha: "22:18" } },
  { date: "2026-05-05", times: { Fajr: "02:25", Sunrise: "05:19", Dhuhr: "13:04", Asr: "18:18", Maghrib: "20:50", Isha: "22:18" } },
  { date: "2026-05-06", times: { Fajr: "02:20", Sunrise: "05:17", Dhuhr: "13:04", Asr: "18:19", Maghrib: "20:52", Isha: "22:28" } },
  { date: "2026-05-07", times: { Fajr: "02:14", Sunrise: "05:15", Dhuhr: "13:04", Asr: "18:20", Maghrib: "20:53", Isha: "22:29" } },
  { date: "2026-05-08", times: { Fajr: "02:07", Sunrise: "05:13", Dhuhr: "13:04", Asr: "18:21", Maghrib: "20:55", Isha: "22:30" } },
  { date: "2026-05-09", times: { Fajr: "02:00", Sunrise: "05:12", Dhuhr: "13:04", Asr: "18:22", Maghrib: "20:57", Isha: "22:30" } },
  { date: "2026-05-10", times: { Fajr: "02:00", Sunrise: "05:10", Dhuhr: "13:04", Asr: "18:23", Maghrib: "20:58", Isha: "22:30" } },
  { date: "2026-05-11", times: { Fajr: "02:00", Sunrise: "05:08", Dhuhr: "13:04", Asr: "18:24", Maghrib: "21:00", Isha: "22:30" } },
  { date: "2026-05-12", times: { Fajr: "02:00", Sunrise: "05:06", Dhuhr: "13:03", Asr: "18:25", Maghrib: "21:02", Isha: "22:30" } },
  { date: "2026-05-13", times: { Fajr: "02:00", Sunrise: "05:04", Dhuhr: "13:03", Asr: "18:26", Maghrib: "21:05", Isha: "22:30" } },
  { date: "2026-05-14", times: { Fajr: "02:00", Sunrise: "05:03", Dhuhr: "13:03", Asr: "18:27", Maghrib: "21:07", Isha: "22:30" } },
  { date: "2026-05-15", times: { Fajr: "02:00", Sunrise: "05:01", Dhuhr: "13:03", Asr: "18:28", Maghrib: "21:07", Isha: "22:30" } },
  { date: "2026-05-16", times: { Fajr: "02:00", Sunrise: "05:00", Dhuhr: "13:04", Asr: "18:29", Maghrib: "21:09", Isha: "22:30" } },
  { date: "2026-05-17", times: { Fajr: "02:00", Sunrise: "04:58", Dhuhr: "13:04", Asr: "18:30", Maghrib: "21:10", Isha: "22:30" } },
  { date: "2026-05-18", times: { Fajr: "02:00", Sunrise: "04:56", Dhuhr: "13:04", Asr: "18:31", Maghrib: "21:12", Isha: "22:30" } },
  { date: "2026-05-19", times: { Fajr: "02:00", Sunrise: "04:55", Dhuhr: "13:04", Asr: "18:32", Maghrib: "21:13", Isha: "22:30" } },
  { date: "2026-05-20", times: { Fajr: "02:00", Sunrise: "04:53", Dhuhr: "13:04", Asr: "18:33", Maghrib: "21:15", Isha: "22:30" } },
  { date: "2026-05-21", times: { Fajr: "02:00", Sunrise: "04:52", Dhuhr: "13:04", Asr: "18:34", Maghrib: "21:17", Isha: "22:30" } },
  { date: "2026-05-22", times: { Fajr: "02:00", Sunrise: "04:51", Dhuhr: "13:04", Asr: "18:35", Maghrib: "21:18", Isha: "22:30" } },
  { date: "2026-05-23", times: { Fajr: "02:00", Sunrise: "04:49", Dhuhr: "13:04", Asr: "18:36", Maghrib: "21:20", Isha: "22:30" } },
  { date: "2026-05-24", times: { Fajr: "02:00", Sunrise: "04:48", Dhuhr: "13:04", Asr: "18:37", Maghrib: "21:21", Isha: "22:30" } },
  { date: "2026-05-25", times: { Fajr: "02:00", Sunrise: "04:47", Dhuhr: "13:04", Asr: "18:37", Maghrib: "21:22", Isha: "22:30" } },
  { date: "2026-05-26", times: { Fajr: "02:00", Sunrise: "04:45", Dhuhr: "13:04", Asr: "18:38", Maghrib: "21:23", Isha: "22:30" } },
  { date: "2026-05-27", times: { Fajr: "02:00", Sunrise: "04:44", Dhuhr: "13:04", Asr: "18:39", Maghrib: "21:25", Isha: "22:30" } },
  { date: "2026-05-28", times: { Fajr: "02:00", Sunrise: "04:43", Dhuhr: "13:04", Asr: "18:40", Maghrib: "21:26", Isha: "22:30" } },
  { date: "2026-05-29", times: { Fajr: "02:00", Sunrise: "04:42", Dhuhr: "13:05", Asr: "18:41", Maghrib: "21:28", Isha: "22:30" } },
  { date: "2026-05-30", times: { Fajr: "02:00", Sunrise: "04:41", Dhuhr: "13:05", Asr: "18:41", Maghrib: "21:29", Isha: "22:30" } },
  



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