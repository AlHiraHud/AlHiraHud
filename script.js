


 document.addEventListener("DOMContentLoaded", () => {
  const prayerSchedule = [   
  
  { date: "2025-10-31", times: { Fajr: "05:06", Sunrise: "07:00", Dhuhr: "11:51", Asr: "14:45", Maghrib: "16:39", Isha: "18:35" } },
  { date: "2025-11-01", times: { Fajr: "05:08", Sunrise: "07:02", Dhuhr: "11:51", Asr: "14:43", Maghrib: "16:37", Isha: "18:33" } },
  { date: "2025-11-02", times: { Fajr: "05:09", Sunrise: "07:04", Dhuhr: "11:51", Asr: "14:41", Maghrib: "16:35", Isha: "18:31" } },
  { date: "2025-11-03", times: { Fajr: "05:11", Sunrise: "07:06", Dhuhr: "11:51", Asr: "14:39", Maghrib: "16:33", Isha: "18:30" } },
  { date: "2025-11-04", times: { Fajr: "05:13", Sunrise: "07:08", Dhuhr: "11:51", Asr: "14:38", Maghrib: "16:31", Isha: "18:28" } },
  { date: "2025-11-05", times: { Fajr: "05:14", Sunrise: "07:10", Dhuhr: "11:51", Asr: "14:36", Maghrib: "16:29", Isha: "18:26" } },
  { date: "2025-11-06", times: { Fajr: "05:16", Sunrise: "07:12", Dhuhr: "11:51", Asr: "14:34", Maghrib: "16:27", Isha: "18:25" } },
  { date: "2025-11-07", times: { Fajr: "05:18", Sunrise: "07:14", Dhuhr: "11:51", Asr: "14:32", Maghrib: "16:25", Isha: "18:23" } },
  { date: "2025-11-08", times: { Fajr: "05:19", Sunrise: "07:16", Dhuhr: "11:51", Asr: "14:31", Maghrib: "16:24", Isha: "18:22" } },
  { date: "2025-11-09", times: { Fajr: "05:21", Sunrise: "07:17", Dhuhr: "11:51", Asr: "14:29", Maghrib: "16:22", Isha: "18:20" } },
  { date: "2025-11-10", times: { Fajr: "05:22", Sunrise: "07:19", Dhuhr: "11:51", Asr: "14:28", Maghrib: "16:20", Isha: "18:19" } },
  { date: "2025-11-11", times: { Fajr: "05:24", Sunrise: "07:21", Dhuhr: "11:51", Asr: "14:26", Maghrib: "16:18", Isha: "18:18" } },
  { date: "2025-11-12", times: { Fajr: "05:26", Sunrise: "07:23", Dhuhr: "11:51", Asr: "14:25", Maghrib: "16:17", Isha: "18:16" } },
  { date: "2025-11-13", times: { Fajr: "05:27", Sunrise: "07:25", Dhuhr: "11:51", Asr: "14:23", Maghrib: "16:15", Isha: "18:15" } },
  { date: "2025-11-14", times: { Fajr: "05:29", Sunrise: "07:27", Dhuhr: "11:52", Asr: "14:22", Maghrib: "16:14", Isha: "18:14" } },
  { date: "2025-11-15", times: { Fajr: "05:30", Sunrise: "07:29", Dhuhr: "11:52", Asr: "14:20", Maghrib: "16:12", Isha: "18:13" } },
  { date: "2025-11-16", times: { Fajr: "05:32", Sunrise: "07:31", Dhuhr: "11:52", Asr: "14:19", Maghrib: "16:11", Isha: "18:12" } },
  { date: "2025-11-17", times: { Fajr: "05:33", Sunrise: "07:32", Dhuhr: "11:52", Asr: "14:18", Maghrib: "16:09", Isha: "18:10" } },
  { date: "2025-11-18", times: { Fajr: "05:35", Sunrise: "07:34", Dhuhr: "11:52", Asr: "14:16", Maghrib: "16:08", Isha: "18:09" } },
  { date: "2025-11-19", times: { Fajr: "05:36", Sunrise: "07:36", Dhuhr: "11:53", Asr: "14:15", Maghrib: "16:06", Isha: "18:08" } },
  { date: "2025-11-20", times: { Fajr: "05:38", Sunrise: "07:38", Dhuhr: "11:53", Asr: "14:14", Maghrib: "16:05", Isha: "18:07" } },
  { date: "2025-11-21", times: { Fajr: "05:39", Sunrise: "07:40", Dhuhr: "11:53", Asr: "14:13", Maghrib: "16:04", Isha: "18:06" } },
  { date: "2025-11-22", times: { Fajr: "05:40", Sunrise: "07:41", Dhuhr: "11:53", Asr: "14:12", Maghrib: "16:03", Isha: "18:06" } },
  { date: "2025-11-23", times: { Fajr: "05:42", Sunrise: "07:43", Dhuhr: "11:54", Asr: "14:11", Maghrib: "16:02", Isha: "18:05" } },
  { date: "2025-11-24", times: { Fajr: "05:43", Sunrise: "07:45", Dhuhr: "11:54", Asr: "14:09", Maghrib: "16:00", Isha: "18:04" } },
  { date: "2025-11-25", times: { Fajr: "05:45", Sunrise: "07:47", Dhuhr: "11:54", Asr: "14:09", Maghrib: "15:59", Isha: "18:03" } },
  { date: "2025-11-26", times: { Fajr: "05:46", Sunrise: "07:48", Dhuhr: "11:55", Asr: "14:08", Maghrib: "15:58", Isha: "18:03" } },
  { date: "2025-11-27", times: { Fajr: "05:47", Sunrise: "07:50", Dhuhr: "11:55", Asr: "14:07", Maghrib: "15:57", Isha: "18:02" } },
  { date: "2025-11-28", times: { Fajr: "05:49", Sunrise: "07:52", Dhuhr: "11:55", Asr: "14:06", Maghrib: "15:56", Isha: "18:01" } },
  { date: "2025-11-29", times: { Fajr: "05:50", Sunrise: "07:53", Dhuhr: "11:56", Asr: "14:05", Maghrib: "15:56", Isha: "18:01" } },
  { date: "2025-11-30", times: { Fajr: "05:51", Sunrise: "07:55", Dhuhr: "11:56", Asr: "14:04", Maghrib: "15:55", Isha: "18:00" } }



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