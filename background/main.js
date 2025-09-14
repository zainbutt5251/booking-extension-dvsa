function W() {
    let q = new Date();
    return q.setDate(q.getDate() + 1), q.toISOString().split("T")[0];
}
function B() {
    let q = new Date();
    return q.setMonth(q.getMonth() + 3), q.toISOString().split("T")[0];
}
function Y() {
    return { userId: null, userName: null, timeDelay: 500, startDate: W(), endDate: B(), enableRapidMode: !0, rapidModeDelay: 500, delayVariation: 10,searchBusiness:"TC-B" };
}
function w() {
    return { automation: { isRunning: !1, startTime: null }, formValues: Y() };
}
function A() {
    return { users: [], selectedCenters: [], centerGroups: [] };
}
var G = w(),
    K = A(),
    j = !1,
    J = !1;
chrome.storage.local.get(["extensionState", "users", "selectedCenters", "centerGroups"], (q) => {
    if (q.extensionState)
        (G = q.extensionState),
            chrome.storage.local.set({ extensionState: G }, () => {
                console.log("Automation state reset on initialization");
            });
    if (q.users) K.users = q.users;
    if (q.selectedCenters) K.selectedCenters = q.selectedCenters;
    if (q.centerGroups) K.centerGroups = q.centerGroups;
    console.log("User preferences loaded:", K), (j = !0), console.log("Background script is ready");
});
function _(q, Q = {}) {
    chrome.tabs.query({ active: !0, currentWindow: !0 }, function (z) {
        if (z.length === 0) {
            console.error("No active tab found");
            return;
        }
        chrome.tabs.sendMessage(z[0].id, { action: "stateUpdate", eventType: q, state: G, payload: Q }, () => {
            if (chrome.runtime.lastError);
        }),
            console.log(`Sent ${q} to current tab with payload:`, Q);
    });
}
chrome.runtime.onConnect.addListener(function (q) {
    if (q.name === "popup")
        q.onDisconnect.addListener(function () {
            console.log("popup has been closed");
        });
});
chrome.runtime.onMessage.addListener((q, Q, z) => {
    if (q.action === "getExtensionState") return z(G), !0;
    if (q.action === "isBackgroundReady") return z({ ready: j }), !0;
    if (q.action === "incrementUserClickCount") {
        let N = G.formValues.userId,
            X = K.users.findIndex((Z) => Z.userId === N);
        if (X !== -1) {
            K.users[X].clicked += q.fetchCount || 1;
            let Z = K.users[X].clicked;
            chrome.storage.local.set({ users: K.users }, () => {
                console.log(`User ${N} click count updated:`, Z), chrome.runtime.sendMessage({ action: "stateUpdate", eventType: "userClickCountUpdated", payload: { userId: N, clickCount: Z } });
            });
        }
        return z({ success: !0, clickCount: X !== -1 ? K.users[X].clicked : 0 }), !0;
    }
    if (q.action === "updateExtensionState") {
        if (q.state)
            (G = q.state),
                chrome.storage.local.set({ extensionState: G }, () => {
                    console.log("Extension state updated and saved:", G), _("stateUpdated", { source: "updateExtensionState" });
                }),
                z({ success: !0 });
        else z({ success: !1, error: "No state provided" });
        return !0;
    }
    if (q.action === "startAutomation")
        return (
            (G.automation.isRunning = !0),
            (G.automation.startTime = Date.now()),
            chrome.storage.local.set({ extensionState: G }, () => {
                console.log("Automation started:", G), _("automationStarted", { startTime: G.automation.startTime, userId: G.formValues.userId }), I();
            }),
            z({ success: !0 }),
            !0
        );
    if (q.action === "stopAutomation")
        return (
            (G.automation.isRunning = !1),
            (G.automation.startTime = null),
            chrome.storage.local.set({ extensionState: G }, () => {
                console.log("Automation stopped"), _("automationStopped", { reason: "userRequested" });
            }),
            z({ success: !0 }),
            !0
        );
    if (q.action === "getUserPreferences") return z(K), !0;
    if (q.action === "updateUsers") {
        if (q.users)
            (K.users = q.users),
                chrome.storage.local.set({ users: q.users }, () => {
                    console.log("Users updated and saved:", q.users), _("userPreferencesUpdated", { type: "users", count: q.users.length });
                }),
                z({ success: !0 });
        else z({ success: !1, error: "No users provided" });
        return !0;
    }
    if (q.action === "updateCenters") {
        if (q.centers)
            (K.selectedCenters = q.centers),
                chrome.storage.local.set({ selectedCenters: q.centers }, () => {
                    console.log("Centers updated and saved:", q.centers), _("userPreferencesUpdated", { type: "centers", count: q.centers.length });
                }),
                z({ success: !0 });
        else z({ success: !1, error: "No centers provided" });
        return !0;
    }
    if (q.action === "updateCenterGroups") {
        if (q.groups)
            (K.centerGroups = q.groups),
                chrome.storage.local.set({ centerGroups: q.groups }, () => {
                    console.log("Center groups updated and saved:", q.groups), _("userPreferencesUpdated", { type: "centerGroups", count: q.groups.length });
                }),
                z({ success: !0 });
        else z({ success: !1, error: "No center groups provided" });
        return !0;
    }
    if (q.action === "removeCookies")
        return (
            U()
                .then((N) => {
                    console.log("Security cookies removed successfully"), z({ success: !0 });
                })
                .catch((N) => {
                    console.error("Error removing security cookies:", N), z({ success: !1, error: N.message });
                }),
            !0
        );
    if (q.action === "checkCaptchaFailure") {
        if ((z({ captchaFailureDetected: J }), q.resetAfterCheck)) J = !1;
        return !0;
    }
    return z({ success: !1, error: "Unknown action" }), !0;
});
function I() {
    chrome.tabs.query({ active: !0, currentWindow: !0 }, function (q) {
        if (q.length === 0) {
            console.error("No active tab found");
            return;
        }
        let { id: Q, url: z } = q[0];
        if (z.includes("dvsa.gov.uk/obs")) {
            console.log("Already on test server or DVSA site:", z);
            return;
        }
        chrome.tabs.update(Q, { url: "https://driver-services.dvsa.gov.uk/obs" }), console.log("Navigating to login page");
    });
}
function U() {
    let q = ["JSESSIONID", "AWSALB", "AWSALBCORS"],
        Q = [],
        z = ["reese84", "incap_ses_", "incap_sh_", "nlbi_", "visid_incap_"],
        X = [".driver-services.dvsa.gov.uk", ".dvsa.gov.uk"].map((Z) => {
            return new Promise((L, O) => {
                chrome.cookies.getAll({ domain: Z }, (E) => {
                    if (chrome.runtime.lastError) {
                        O(chrome.runtime.lastError);
                        return;
                    }
                    if (!E || E.length === 0) {
                        L([]);
                        return;
                    }
                    let V = E.filter((H) => {
                        if (q.includes(H.name)) return console.log(`Keeping essential cookie: ${H.name}`), !1;
                        for (let $ of Q) if (H.name.startsWith($)) return console.log(`Keeping cookie with essential prefix: ${H.name}`), !1;
                        for (let $ of z) if (H.name.startsWith($)) return !0;
                        return console.log(`Keeping other cookie: ${H.name}`), !1;
                    });
                    console.log(`Found ${V.length} security cookies to remove out of ${E.length} total`);
                    let F = V.map((H) => {
                        return new Promise(($) => {
                            chrome.cookies.remove({ url: `https://${H.domain}${H.path}`, name: H.name }, function (M) {
                                if (M) console.log(`Removed security cookie: ${H.name}`);
                                else console.log(`Failed to remove security cookie: ${H.name}`);
                                $(H.name);
                            });
                        });
                    });
                    Promise.all(F).then(L).catch(O);
                });
            });
        });
    return Promise.all(X);
}
chrome.webRequest.onCompleted.addListener(
    function (q) {
        if (q.method === "POST" && q.statusCode === 404 && q.url.includes("/_Incapsula_Resource")) console.warn("Detected failed Incapsula captcha request:", q.url), (J = !0);
    },
    { urls: ["*://*.dvsa.gov.uk/_Incapsula_Resource*"], types: ["xmlhttprequest"] }
);
    

// Check login status when extension starts
chrome.runtime.onStartup.addListener(() => {
  checkLoginStatus();
});

// Check login status when extension is installed/updated
chrome.runtime.onInstalled.addListener(() => {
  checkLoginStatus();
});

// Function to check login status and set appropriate popup
function checkLoginStatus() {
  chrome.storage.local.get(['loggedInUser'], (result) => {
    
      chrome.action.setPopup({ popup: "popup.html" });
     
  });
}