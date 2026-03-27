const params = new URLSearchParams(window.location.search);
const certId = params.get("id") || "xaSdyz20TZeU59IXTKAHQQ";

const certIdEl = document.getElementById("certId");
const certIdMirrorEl = document.getElementById("certIdMirror");
if (certIdEl) certIdEl.textContent = certId;
if (certIdMirrorEl) certIdMirrorEl.textContent = certId;

const issueDate = "March 27, 2026";
const issueDateEl = document.getElementById("issueDate");
const issueDateMirrorEl = document.getElementById("issueDateMirror");
if (issueDateEl) issueDateEl.textContent = issueDate;
if (issueDateMirrorEl) issueDateMirrorEl.textContent = issueDate;
