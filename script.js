


 document.addEventListener("DOMContentLoaded", () => {
  const prayerSchedule = [   
  
[
  { date: "2026-02-19", times: { Fajr: "05:21", Sunrise: "07:13", Dhuhr: "12:21", Asr: "15:32", Maghrib: "17:30", Isha: "19:22" } },
  { date: "2026-02-20", times: { Fajr: "05:18", Sunrise: "07:11", Dhuhr: "12:21", Asr: "15:34", Maghrib: "17:32", Isha: "19:24" } },
  { date: "2026-02-21", times: { Fajr: "05:16", Sunrise: "07:08", Dhuhr: "12:21", Asr: "15:36", Maghrib: "17:34", Isha: "19:26" } },
  { date: "2026-02-22", times: { Fajr: "05:14", Sunrise: "07:06", Dhuhr: "12:21", Asr: "15:38", Maghrib: "17:36", Isha: "19:28" } },
  { date: "2026-02-23", times: { Fajr: "05:12", Sunrise: "07:04", Dhuhr: "12:20", Asr: "15:40", Maghrib: "17:38", Isha: "19:30" } },
  { date: "2026-02-24", times: { Fajr: "05:10", Sunrise: "07:02", Dhuhr: "12:20", Asr: "15:41", Maghrib: "17:40", Isha: "19:32" } },
  { date: "2026-02-25", times: { Fajr: "05:08", Sunrise: "06:59", Dhuhr: "12:20", Asr: "15:43", Maghrib: "17:42", Isha: "19:34" } },
  { date: "2026-02-26", times: { Fajr: "05:06", Sunrise: "06:57", Dhuhr: "12:20", Asr: "15:45", Maghrib: "17:44", Isha: "19:36" } },
  { date: "2026-02-27", times: { Fajr: "05:03", Sunrise: "06:55", Dhuhr: "12:20", Asr: "15:46", Maghrib: "17:46", Isha: "19:37" } },
  { date: "2026-02-28", times: { Fajr: "05:01", Sunrise: "06:53", Dhuhr: "12:20", Asr: "15:48", Maghrib: "17:48", Isha: "19:39" } },

  { date: "2026-03-01", times: { Fajr: "04:59", Sunrise: "06:50", Dhuhr: "12:19", Asr: "15:50", Maghrib: "17:49", Isha: "19:41" } },
  { date: "2026-03-02", times: { Fajr: "04:57", Sunrise: "06:48", Dhuhr: "12:19", Asr: "15:52", Maghrib: "17:51", Isha: "19:43" } },
  { date: "2026-03-03", times: { Fajr: "04:54", Sunrise: "06:46", Dhuhr: "12:19", Asr: "15:53", Maghrib: "17:53", Isha: "19:45" } },
  { date: "2026-03-04", times: { Fajr: "04:52", Sunrise: "06:43", Dhuhr: "12:19", Asr: "15:55", Maghrib: "17:55", Isha: "19:47" } },
  { date: "2026-03-05", times: { Fajr: "04:49", Sunrise: "06:41", Dhuhr: "12:19", Asr: "15:57", Maghrib: "17:57", Isha: "19:49" } },
  { date: "2026-03-06", times: { Fajr: "04:47", Sunrise: "06:39", Dhuhr: "12:18", Asr: "15:58", Maghrib: "17:59", Isha: "19:51" } },
  { date: "2026-03-07", times: { Fajr: "04:44", Sunrise: "06:36", Dhuhr: "12:18", Asr: "16:00", Maghrib: "18:01", Isha: "19:53" } },
  { date: "2026-03-08", times: { Fajr: "04:42", Sunrise: "06:34", Dhuhr: "12:18", Asr: "16:01", Maghrib: "18:03", Isha: "19:55" } },
  { date: "2026-03-09", times: { Fajr: "04:39", Sunrise: "06:31", Dhuhr: "12:18", Asr: "16:03", Maghrib: "18:05", Isha: "19:57" } },
  { date: "2026-03-10", times: { Fajr: "04:37", Sunrise: "06:29", Dhuhr: "12:17", Asr: "16:05", Maghrib: "18:07", Isha: "19:59" } },

  { date: "2026-03-11", times: { Fajr: "04:34", Sunrise: "06:27", Dhuhr: "12:17", Asr: "16:06", Maghrib: "18:09", Isha: "20:00" } },
  { date: "2026-03-12", times: { Fajr: "04:32", Sunrise: "06:24", Dhuhr: "12:17", Asr: "16:08", Maghrib: "18:10", Isha: "20:00" } },
  { date: "2026-03-13", times: { Fajr: "04:29", Sunrise: "06:22", Dhuhr: "12:17", Asr: "16:09", Maghrib: "18:12", Isha: "20:00" } },
  { date: "2026-03-14", times: { Fajr: "04:27", Sunrise: "06:19", Dhuhr: "12:16", Asr: "16:11", Maghrib: "18:14", Isha: "20:00" } },
  { date: "2026-03-15", times: { Fajr: "04:24", Sunrise: "06:17", Dhuhr: "12:16", Asr: "16:12", Maghrib: "18:16", Isha: "20:00" } },
  { date: "2026-03-16", times: { Fajr: "04:21", Sunrise: "06:15", Dhuhr: "12:16", Asr: "16:14", Maghrib: "18:18", Isha: "20:00" } },
  { date: "2026-03-17", times: { Fajr: "04:18", Sunrise: "06:12", Dhuhr: "12:15", Asr: "16:15", Maghrib: "18:20", Isha: "20:00" } },
  { date: "2026-03-18", times: { Fajr: "04:16", Sunrise: "06:10", Dhuhr: "12:15", Asr: "16:17", Maghrib: "18:22", Isha: "20:00" } },
  { date: "2026-03-19", times: { Fajr: "04:13", Sunrise: "06:07", Dhuhr: "12:15", Asr: "16:18", Maghrib: "18:24", Isha: "20:00" } },
  { date: "2026-03-20", times: { Fajr: "04:10", Sunrise: "06:05", Dhuhr: "12:15", Asr: "16:20", Maghrib: "18:25", Isha: "20:00" } }
]


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
      <span style="font-size: 0.9em; color: #ef0aff;">On ${formattedDate}</span><br>
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

function incrementTasbih() {
  tasbihCount++;
  document.getElementById("count").textContent = tasbihCount;
}

function decrementTasbih() {
  if (tasbihCount > 0) tasbihCount--;
  document.getElementById("count").textContent = tasbihCount;
}

function resetTasbih() {
  tasbihCount = 0;
  document.getElementById("count").textContent = tasbihCount;
}




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




if (!document.querySelector('.tv-bar')) {
  document.body.insertAdjacentHTML('beforeend', `
    <div class="tv-bar">
      <div class="badge">Notices</div>
      <div class="scroll-wrapper">
        <div class="scroll-text">
          Donate Now: Al Hira Educational Centre — Sort Code: 30-64-10 — Account: 34642160 (May Allah Reward You)
        </div>
      </div>
    </div>
  `);
}


function updateTVClock() {
  const clockEl = document.getElementById("hi-hi");
  if (!clockEl) return;

  const now = new Date();

  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // convert 0 → 12

  clockEl.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
}

setInterval(updateTVClock, 1000);
updateTVClock();
