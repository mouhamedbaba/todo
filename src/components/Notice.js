import React from "react";

const CookieNotice = () =>{
    return (
        <div class="toast hide notice shadow-none bg-transparent" id="cookie-notice" role="alert" data-options='{"autoShow":true,"autoShowDelay":3000,"showOnce":true,"cookieExpireTime":7200000}' data-autohide="false" aria-live="assertive" aria-atomic="true" style="max-width:35rem">
            <div class="toast-body my-3 ms-0 ms-md-5">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex">
                    <div class="pe-3"><img src="%PUBLIC_URL%/assets/img/icons/cookie-1.png" width="40" alt="cookie" /></div>
                    <div>
                      <p>Ce site utilise des cookies pour amelioer votre experience utilisateur</p><button class="btn btn-sm btn-falcon-primary me-3" type="button" data-bs-dismiss="toast" aria-label="Close">Okay</button><a class="learn-more me-3" href="#">Learn more<span class="fas fa-chevron-right ms-1 fs--2"></span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </div>
    )
}

export default CookieNotice;