const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

/* Premium 3-second data intro */
const loaderMessages = ["Reading data...","Mapping KPIs...","Building insights...","Loading dashboard...","Ready."];
let loaderIndex = 0;
const loaderText = $("#loaderText");
const loaderMessageTimer = setInterval(() => {
  if (!loaderText) return;
  loaderIndex = Math.min(loaderIndex + 1, loaderMessages.length - 1);
  loaderText.textContent = loaderMessages[loaderIndex];
}, 570);
function hideLoader(){
  const loader = $("#loader");
  if (!loader) return;
  clearInterval(loaderMessageTimer);
  loader.classList.add("is-done");
  setTimeout(() => loader.remove(), 650);
}
setTimeout(hideLoader, 1800);

/* Theme */
const themeToggle = $("#themeToggle");
const savedTheme = localStorage.getItem("omar-theme");
if (savedTheme === "light") document.documentElement.classList.add("light-mode");
function updateThemeButton(){
  if (!themeToggle) return;
  const light = document.documentElement.classList.contains("light-mode");
  themeToggle.querySelector(".theme-icon").textContent = light ? "☀" : "☾";
  themeToggle.setAttribute("aria-label", light ? "Switch to dark mode" : "Switch to light mode");
}
updateThemeButton();
themeToggle?.addEventListener("click", () => {
  document.documentElement.classList.toggle("light-mode");
  localStorage.setItem("omar-theme", document.documentElement.classList.contains("light-mode") ? "light" : "dark");
  updateThemeButton();
});

/* Typewriter */
const typewriter = $("#typewriterText");
if (typewriter) {
  const phrases = ["Data → Insights → Decisions", "Power BI • SQL • Excel • Python", "Clean data. Clear stories. Better decisions."];
  let pi=0, ci=0, deleting=false;
  const tick=()=>{
    const phrase=phrases[pi];
    typewriter.textContent=phrase.slice(0,ci);
    if(!deleting && ci<phrase.length){ci++;setTimeout(tick,58)}
    else if(!deleting){deleting=true;setTimeout(tick,1500)}
    else if(ci>0){ci--;setTimeout(tick,30)}
    else{deleting=false;pi=(pi+1)%phrases.length;setTimeout(tick,450)}
  };
  tick();
}

/* Mobile menu */
const menuBtn = $(".menu-btn");
const navLinks = $(".nav-links");
menuBtn?.addEventListener("click", () => navLinks?.classList.toggle("open"));
$$(".nav-links a").forEach(a => a.addEventListener("click", () => navLinks?.classList.remove("open")));

/* Scroll reveal */
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  $$(".reveal").forEach(el => observer.observe(el));
} else {
  $$(".reveal").forEach(el => el.classList.add("visible"));
}

/* 3D cards */
$$(".tilt").forEach(card => {
  card.addEventListener("mousemove", e => {
    if (innerWidth < 800) return;
    const r = card.getBoundingClientRect();
    const x = e.clientX - r.left, y = e.clientY - r.top;
    const rx = ((y / r.height) - .5) * -8;
    const ry = ((x / r.width) - .5) * 8;
    card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-5px)`;
  });
  card.addEventListener("mouseleave", () => card.style.transform = "");
});

/* Premium count-up stats — replay on every visit */
const stats = $$(".big-stat strong");

function animateStat(el) {
  if (!el || el.dataset.running === "1") return;

  el.dataset.running = "1";
  const target = Number(el.dataset.count || 0);
  const duration = 1450;
  const startTime = performance.now();
  const easeOut = t => 1 - Math.pow(1 - t, 4);

  el.textContent = "0+";
  el.parentElement.classList.remove("counted");

  function frame(now) {
    const progress = Math.min(1, (now - startTime) / duration);
    const value = Math.round(target * easeOut(progress));
    el.textContent = value + "+";

    if (progress < 1) {
      requestAnimationFrame(frame);
    } else {
      el.textContent = target + "+";
      el.parentElement.classList.add("counted");
      // Unlock after the section is left so the next visit animates again.
    }
  }
  requestAnimationFrame(frame);
}

if (stats.length && "IntersectionObserver" in window) {
  const countObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const el = entry.target;

      if (entry.isIntersecting) {
        if (el.dataset.running !== "1") {
          animateStat(el);
        }
      } else {
        delete el.dataset.running;
        el.textContent = "0+";
        el.parentElement.classList.remove("counted");
      }
    });
  }, { threshold: 0.5 });

  stats.forEach(stat => {
    stat.dataset.running = "";
    stat.textContent = "0+";
    countObserver.observe(stat);
  });
} else {
  stats.forEach(animateStat);
}

/* Custom cursor — created once */
if (window.matchMedia && window.matchMedia("(pointer:fine)").matches) {
  document.documentElement.classList.add("custom-cursor");
  const dot = document.createElement("div");
  const ring = document.createElement("div");
  dot.className = "cursor-dot";
  ring.className = "cursor-ring";
  document.body.append(dot, ring);
  let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my;
  window.addEventListener("mousemove", e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + "px";
    dot.style.top = my + "px";
    dot.style.opacity = "1";
    ring.style.opacity = "1";
  }, {passive:true});
  const cursorLoop = () => {
    rx += (mx - rx) * .18;
    ry += (my - ry) * .18;
    ring.style.left = rx + "px";
    ring.style.top = ry + "px";
    requestAnimationFrame(cursorLoop);
  };
  cursorLoop();
  document.querySelectorAll("a,button,input,textarea,.project-card,.tilt,.gallery-thumb").forEach(el => {
    el.addEventListener("mouseenter", () => document.body.classList.add("cursor-hover"));
    el.addEventListener("mouseleave", () => document.body.classList.remove("cursor-hover"));
  });
}

/* Hero orb parallax */
const orb = $("#orb");
if (orb) {
  window.addEventListener("mousemove", e => {
    if (innerWidth < 900) return;
    const x = (e.clientX / innerWidth - .5) * 12;
    const y = (e.clientY / innerHeight - .5) * -12;
    orb.style.transform = `translate(${x}px,${y}px)`;
  }, {passive:true});
}

/* Lightweight particles: 18 instead of 45 */
const particleBox = $("#particles");
if (particleBox) {
  const frag = document.createDocumentFragment();
  for (let i = 0; i < 18; i++) {
    const p = document.createElement("span");
    p.style.cssText = `position:fixed;width:${Math.random()*2+1}px;height:${Math.random()*2+1}px;border-radius:50%;background:rgba(150,220,255,.45);left:${Math.random()*100}vw;top:${Math.random()*100}vh;pointer-events:none;opacity:${Math.random()*.35+.08};animation:driftV6 ${10+Math.random()*16}s linear infinite`;
    frag.appendChild(p);
  }
  particleBox.appendChild(frag);
}

/* Project filters */
$$(".filter-btn").forEach(btn => btn.addEventListener("click", () => {
  $$(".filter-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  const f = btn.dataset.filter;
  $$(".project-card").forEach(card => {
    const categories = (card.dataset.category || "").split(/\s+/);
    card.classList.toggle("is-hidden", !(f === "all" || categories.includes(f)));
  });
}));

/* Contact form — FormSubmit AJAX + native fallback */
const contactForm = $("#contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", async e => {
    e.preventDefault();

    const submitBtn = contactForm.querySelector("button[type=submit]");
    const note = contactForm.querySelector(".form-note");
    const original = submitBtn?.innerHTML || "Send Message <span>↗</span>";

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = "Sending... <span>↗</span>";
    }
    if (note) {
      note.textContent = "Sending your message...";
      note.classList.remove("success", "error");
    }

    const formData = new FormData(contactForm);

    try {
      const response = await fetch("https://formsubmit.co/ajax/omarwagdy240@gmail.com", {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: formData
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok || result.success === false) {
        throw new Error(result.message || "FormSubmit rejected the request.");
      }

      contactForm.reset();
      if (note) {
        note.textContent = "✓ Message sent successfully.";
        note.classList.add("success");
      }
    } catch (error) {
      // The native FormSubmit endpoint is the reliable fallback.
      // It may show the activation/thank-you page instead of staying on this page.
      if (note) {
        note.textContent = "The form needs one-time FormSubmit activation. Please check your Gmail (including Spam), or email me directly.";
        note.classList.add("error");
      }

      // Do not silently lose the user's message.
      // Re-submit natively only after an AJAX failure.
      setTimeout(() => {
        contactForm.submit();
      }, 450);
      return;
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = original;
      }
    }
  });
}

// V8: make cursor hover handling work for dynamically rendered/complex cards too.
document.addEventListener("mouseover", e => {
  if (e.target.closest("a,button,input,textarea,.project-card,.skill-card,.gallery-thumb")) {
    document.body.classList.add("cursor-hover");
  }
});
document.addEventListener("mouseout", e => {
  if (e.target.closest("a,button,input,textarea,.project-card,.skill-card,.gallery-thumb")) {
    document.body.classList.remove("cursor-hover");
  }
});


/* Premium micro-interactions */
document.addEventListener("mousemove", e => {
  document.querySelectorAll(".magnetic").forEach(el => {
    if (innerWidth < 900) return;
    const r=el.getBoundingClientRect(), x=e.clientX-r.left-r.width/2, y=e.clientY-r.top-r.height/2;
    if(Math.abs(x)<r.width*.9 && Math.abs(y)<r.height*.9) el.style.transform=`translate(${x*.035}px,${y*.035}px)`;
    else el.style.transform="";
  });
},{passive:true});
document.addEventListener("mouseleave",()=>document.querySelectorAll(".magnetic").forEach(el=>el.style.transform=""));
