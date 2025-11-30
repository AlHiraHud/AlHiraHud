


 document.addEventListener("DOMContentLoaded", () => {
  const prayerSchedule = [   
  
{ date: "2025-12-01", times: { Fajr: "05:52", Sunrise: "07:56", Dhuhr: "11:56", Asr: "14:04", Maghrib: "15:54", Isha: "18:00" } },
{ date: "2025-12-02", times: { Fajr: "05:53", Sunrise: "07:58", Dhuhr: "11:57", Asr: "14:03", Maghrib: "15:53", Isha: "17:59" } },
{ date: "2025-12-03", times: { Fajr: "05:55", Sunrise: "07:59", Dhuhr: "11:57", Asr: "14:03", Maghrib: "15:53", Isha: "17:59" } },
{ date: "2025-12-04", times: { Fajr: "05:56", Sunrise: "08:00", Dhuhr: "11:57", Asr: "14:02", Maghrib: "15:52", Isha: "17:59" } },
{ date: "2025-12-05", times: { Fajr: "05:57", Sunrise: "08:02", Dhuhr: "11:58", Asr: "14:02", Maghrib: "15:52", Isha: "17:58" } },
{ date: "2025-12-06", times: { Fajr: "05:58", Sunrise: "08:03", Dhuhr: "11:58", Asr: "14:01", Maghrib: "15:51", Isha: "17:58" } },
{ date: "2025-12-07", times: { Fajr: "05:59", Sunrise: "08:04", Dhuhr: "11:59", Asr: "14:01", Maghrib: "15:51", Isha: "17:58" } },
{ date: "2025-12-08", times: { Fajr: "06:00", Sunrise: "08:06", Dhuhr: "11:59", Asr: "14:01", Maghrib: "15:50", Isha: "17:58" } },
{ date: "2025-12-09", times: { Fajr: "06:01", Sunrise: "08:07", Dhuhr: "12:00", Asr: "14:00", Maghrib: "15:50", Isha: "17:58" } },
{ date: "2025-12-10", times: { Fajr: "06:02", Sunrise: "08:08", Dhuhr: "12:00", Asr: "14:00", Maghrib: "15:50", Isha: "17:58" } },
{ date: "2025-12-11", times: { Fajr: "06:03", Sunrise: "08:09", Dhuhr: "12:00", Asr: "14:00", Maghrib: "15:50", Isha: "17:58" } },
{ date: "2025-12-12", times: { Fajr: "06:04", Sunrise: "08:10", Dhuhr: "12:01", Asr: "14:00", Maghrib: "15:50", Isha: "17:58" } },
{ date: "2025-12-13", times: { Fajr: "06:05", Sunrise: "08:11", Dhuhr: "12:01", Asr: "14:00", Maghrib: "15:50", Isha: "17:58" } },
{ date: "2025-12-14", times: { Fajr: "06:05", Sunrise: "08:12", Dhuhr: "12:02", Asr: "14:00", Maghrib: "15:50", Isha: "17:58" } },
{ date: "2025-12-15", times: { Fajr: "06:06", Sunrise: "08:13", Dhuhr: "12:02", Asr: "14:00", Maghrib: "15:50", Isha: "17:58" } },
{ date: "2025-12-16", times: { Fajr: "06:07", Sunrise: "08:14", Dhuhr: "12:03", Asr: "14:01", Maghrib: "15:50", Isha: "17:59" } },
{ date: "2025-12-17", times: { Fajr: "06:08", Sunrise: "08:15", Dhuhr: "12:03", Asr: "14:01", Maghrib: "15:50", Isha: "17:59" } },
{ date: "2025-12-18", times: { Fajr: "06:08", Sunrise: "08:15", Dhuhr: "12:04", Asr: "14:01", Maghrib: "15:50", Isha: "17:59" } },
{ date: "2025-12-19", times: { Fajr: "06:09", Sunrise: "08:16", Dhuhr: "12:04", Asr: "14:01", Maghrib: "15:51", Isha: "18:00" } },
{ date: "2025-12-20", times: { Fajr: "06:09", Sunrise: "08:17", Dhuhr: "12:05", Asr: "14:02", Maghrib: "15:51", Isha: "18:00" } },
{ date: "2025-12-21", times: { Fajr: "06:10", Sunrise: "08:17", Dhuhr: "12:05", Asr: "14:02", Maghrib: "15:52", Isha: "18:01" } },
{ date: "2025-12-22", times: { Fajr: "06:10", Sunrise: "08:18", Dhuhr: "12:06", Asr: "14:03", Maghrib: "15:52", Isha: "18:01" } },
{ date: "2025-12-23", times: { Fajr: "06:11", Sunrise: "08:18", Dhuhr: "12:06", Asr: "14:03", Maghrib: "15:53", Isha: "18:02" } },
{ date: "2025-12-24", times: { Fajr: "06:11", Sunrise: "08:18", Dhuhr: "12:07", Asr: "14:04", Maghrib: "15:53", Isha: "18:02" } },
{ date: "2025-12-25", times: { Fajr: "06:12", Sunrise: "08:19", Dhuhr: "12:07", Asr: "14:05", Maghrib: "15:54", Isha: "18:03" } },
{ date: "2025-12-26", times: { Fajr: "06:12", Sunrise: "08:19", Dhuhr: "12:08", Asr: "14:06", Maghrib: "15:55", Isha: "18:04" } },
{ date: "2025-12-27", times: { Fajr: "06:12", Sunrise: "08:19", Dhuhr: "12:08", Asr: "14:06", Maghrib: "15:56", Isha: "18:04" } },
{ date: "2025-12-28", times: { Fajr: "06:13", Sunrise: "08:19", Dhuhr: "12:09", Asr: "14:07", Maghrib: "15:56", Isha: "18:05" } },
{ date: "2025-12-29", times: { Fajr: "06:13", Sunrise: "08:19", Dhuhr: "12:09", Asr: "14:08", Maghrib: "15:57", Isha: "18:06" } },
{ date: "2025-12-30", times: { Fajr: "06:13", Sunrise: "08:19", Dhuhr: "12:10", Asr: "14:09", Maghrib: "15:58", Isha: "18:07" } },
{ date: "2025-12-31", times: { Fajr: "06:13", Sunrise: "08:19", Dhuhr: "12:10", Asr: "14:10", Maghrib: "15:59", Isha: "18:08" } }



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
        🕌 All scheduled prayers have passed.<br>
        <span style="font-size: 0.9em; color: #666;">
          You may still offer extra prayers or reflect quietly.
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