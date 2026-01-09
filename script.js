


 document.addEventListener("DOMContentLoaded", () => {
  const prayerSchedule = [   
  
{ date: "2026-01-01", times: { Fajr: "06:13", Sunrise: "08:19", Dhuhr: "12:11", Asr: "14:11", Maghrib: "16:01", Isha: "18:09" } },
{ date: "2026-01-02", times: { Fajr: "06:13", Sunrise: "08:19", Dhuhr: "12:11", Asr: "14:12", Maghrib: "16:02", Isha: "18:10" } },
{ date: "2026-01-03", times: { Fajr: "06:13", Sunrise: "08:19", Dhuhr: "12:12", Asr: "14:13", Maghrib: "16:03", Isha: "18:11" } },
{ date: "2026-01-04", times: { Fajr: "06:13", Sunrise: "08:18", Dhuhr: "12:12", Asr: "14:14", Maghrib: "16:04", Isha: "18:12" } },
{ date: "2026-01-05", times: { Fajr: "06:13", Sunrise: "08:18", Dhuhr: "12:13", Asr: "14:16", Maghrib: "16:05", Isha: "18:13" } },
{ date: "2026-01-06", times: { Fajr: "06:12", Sunrise: "08:17", Dhuhr: "12:13", Asr: "14:17", Maghrib: "16:07", Isha: "18:14" } },
{ date: "2026-01-07", times: { Fajr: "06:12", Sunrise: "08:17", Dhuhr: "12:13", Asr: "14:18", Maghrib: "16:08", Isha: "18:15" } },
{ date: "2026-01-08", times: { Fajr: "06:12", Sunrise: "08:16", Dhuhr: "12:14", Asr: "14:19", Maghrib: "16:10", Isha: "18:16" } },
{ date: "2026-01-09", times: { Fajr: "06:12", Sunrise: "08:16", Dhuhr: "12:14", Asr: "14:21", Maghrib: "16:11", Isha: "18:17" } },
{ date: "2026-01-10", times: { Fajr: "06:11", Sunrise: "08:15", Dhuhr: "12:15", Asr: "14:22", Maghrib: "16:13", Isha: "18:18" } },
{ date: "2026-01-11", times: { Fajr: "06:11", Sunrise: "08:14", Dhuhr: "12:15", Asr: "14:24", Maghrib: "16:14", Isha: "18:20" } },
{ date: "2026-01-12", times: { Fajr: "06:10", Sunrise: "08:14", Dhuhr: "12:15", Asr: "14:25", Maghrib: "16:16", Isha: "18:21" } },
{ date: "2026-01-13", times: { Fajr: "06:10", Sunrise: "08:13", Dhuhr: "12:16", Asr: "14:27", Maghrib: "16:17", Isha: "18:22" } },
{ date: "2026-01-14", times: { Fajr: "06:09", Sunrise: "08:12", Dhuhr: "12:16", Asr: "14:28", Maghrib: "16:19", Isha: "18:24" } },
{ date: "2026-01-15", times: { Fajr: "06:09", Sunrise: "08:11", Dhuhr: "12:17", Asr: "14:30", Maghrib: "16:21", Isha: "18:25" } },
{ date: "2026-01-16", times: { Fajr: "06:08", Sunrise: "08:10", Dhuhr: "12:17", Asr: "14:31", Maghrib: "16:22", Isha: "18:26" } },
{ date: "2026-01-17", times: { Fajr: "06:07", Sunrise: "08:09", Dhuhr: "12:17", Asr: "14:33", Maghrib: "16:24", Isha: "18:28" } },
{ date: "2026-01-18", times: { Fajr: "06:07", Sunrise: "08:08", Dhuhr: "12:18", Asr: "14:35", Maghrib: "16:26", Isha: "18:29" } },
{ date: "2026-01-19", times: { Fajr: "06:06", Sunrise: "08:07", Dhuhr: "12:18", Asr: "14:36", Maghrib: "16:28", Isha: "18:31" } },
{ date: "2026-01-20", times: { Fajr: "06:05", Sunrise: "08:06", Dhuhr: "12:18", Asr: "14:38", Maghrib: "16:29", Isha: "18:32" } },
{ date: "2026-01-21", times: { Fajr: "06:04", Sunrise: "08:04", Dhuhr: "12:18", Asr: "14:40", Maghrib: "16:31", Isha: "18:33" } },
{ date: "2026-01-22", times: { Fajr: "06:03", Sunrise: "08:03", Dhuhr: "12:19", Asr: "14:41", Maghrib: "16:33", Isha: "18:35" } },
{ date: "2026-01-23", times: { Fajr: "06:02", Sunrise: "08:02", Dhuhr: "12:19", Asr: "14:43", Maghrib: "16:35", Isha: "18:36" } },
{ date: "2026-01-24", times: { Fajr: "06:01", Sunrise: "08:00", Dhuhr: "12:19", Asr: "14:45", Maghrib: "16:37", Isha: "18:38" } },
{ date: "2026-01-25", times: { Fajr: "06:00", Sunrise: "07:59", Dhuhr: "12:19", Asr: "14:47", Maghrib: "16:39", Isha: "18:40" } },
{ date: "2026-01-26", times: { Fajr: "05:59", Sunrise: "07:57", Dhuhr: "12:20", Asr: "14:49", Maghrib: "16:41", Isha: "18:41" } },
{ date: "2026-01-27", times: { Fajr: "05:58", Sunrise: "07:56", Dhuhr: "12:20", Asr: "14:50", Maghrib: "16:42", Isha: "18:43" } },
{ date: "2026-01-28", times: { Fajr: "05:57", Sunrise: "07:54", Dhuhr: "12:20", Asr: "14:52", Maghrib: "16:44", Isha: "18:44" } },
{ date: "2026-01-29", times: { Fajr: "05:55", Sunrise: "07:53", Dhuhr: "12:20", Asr: "14:54", Maghrib: "16:46", Isha: "18:46" } },
{ date: "2026-01-30", times: { Fajr: "05:54", Sunrise: "07:51", Dhuhr: "12:20", Asr: "14:56", Maghrib: "16:48", Isha: "18:48" } },
{ date: "2026-01-31", times: { Fajr: "05:53", Sunrise: "07:50", Dhuhr: "12:21", Asr: "14:58", Maghrib: "16:50", Isha: "18:49" } }



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





function resetTasbih() {
  tasbihCount = 0;
  currentPhraseIndex = 0;
  document.getElementById("count").innerText = tasbihCount;
  document.getElementById("phrase").innerText = phrases[currentPhraseIndex];
}