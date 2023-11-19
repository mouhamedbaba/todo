const Top2 = () =>{
    return (
        <nav class="navbar navbar-light navbar-glass navbar-top navbar-expand">
        <button class="btn navbar-toggler-humburger-icon navbar-toggler me-1 me-sm-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalCollapse" aria-controls="navbarVerticalCollapse" aria-expanded="false" aria-label="Toggle Navigation"><span class="navbar-toggle-icon"><span class="toggle-line"></span></span></button>
        <ul class="navbar-nav navbar-nav-icons ms-auto flex-row align-items-center">
          <li class="nav-item">
            <div class="theme-control-toggle fa-icon-wait px-2"><input class="form-check-input ms-0 theme-control-toggle-input" id="themeControlToggle" type="checkbox" data-theme-control="theme" value="dark" /><label class="mb-0 theme-control-toggle-label theme-control-toggle-light" for="themeControlToggle" data-bs-toggle="tooltip" data-bs-placement="left" title="Switch to light theme"><span class="fas fa-sun fs-0"></span></label><label class="mb-0 theme-control-toggle-label theme-control-toggle-dark" for="themeControlToggle" data-bs-toggle="tooltip" data-bs-placement="left" title="Switch to dark theme"><span class="fas fa-moon fs-0"></span></label></div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link notification-indicator notification-indicator-primary px-0 fa-icon-wait" id="navbarDropdownNotification" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-hide-on-body-scroll="data-hide-on-body-scroll"><span class="fas fa-bell" data-fa-transform="shrink-6" ></span></a>
            <div class="dropdown-menu dropdown-menu-end dropdown-menu-card dropdown-menu-notification dropdown-caret-bg" aria-labelledby="navbarDropdownNotification">
              <div class="card card-notification shadow-none">
                <div class="card-header">
                  <div class="row justify-content-between align-items-center">
                    <div class="col-auto">
                      <h6 class="card-header-title mb-0">Notifications</h6>
                    </div>
                    <div class="col-auto ps-0 ps-sm-3"><a class="card-link fw-normal" href="#">Mark all as read</a></div>
                  </div>
                </div>
                <div class="scrollbar-overlay" >
                  <div class="list-group list-group-flush fw-normal fs--1">
                    <div class="list-group-title border-bottom">NEW</div>
                    <div class="list-group-item">
                      <a class="notification notification-flush notification-unread" href="#!">
                        <div class="notification-avatar">
                          <div class="avatar avatar-2xl me-3">
                            <img class="rounded-circle" src="../assets/img/team/1-thumb.png" alt="" />
                          </div>
                        </div>
                        <div class="notification-body">
                          <p class="mb-1"><strong>Emma Watson</strong> replied to your comment : "Hello world 😍"</p>
                          <span class="notification-time"><span class="me-2" role="img" aria-label="Emoji">💬</span>Just now</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="card-footer text-center border-top"><a class="card-link d-block" href="social/notifications.html">View all</a></div>
              </div>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link fa-icon-wait nine-dots p-1" id="navbarDropdownMenu" role="button" data-hide-on-body-scroll="data-hide-on-body-scroll" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="43" viewBox="0 0 16 16" fill="none">
                <circle cx="2" cy="2" r="2" fill="#6C6E71"></circle>
                <circle cx="2" cy="8" r="2" fill="#6C6E71"></circle>
                <circle cx="2" cy="14" r="2" fill="#6C6E71"></circle>
                <circle cx="8" cy="8" r="2" fill="#6C6E71"></circle>
                <circle cx="8" cy="14" r="2" fill="#6C6E71"></circle>
                <circle cx="14" cy="8" r="2" fill="#6C6E71"></circle>
                <circle cx="14" cy="14" r="2" fill="#6C6E71"></circle>
                <circle cx="8" cy="2" r="2" fill="#6C6E71"></circle>
                <circle cx="14" cy="2" r="2" fill="#6C6E71"></circle>
              </svg></a>
            <div class="dropdown-menu dropdown-menu-end dropdown-menu-card dropdown-caret-bg" aria-labelledby="navbarDropdownMenu">
              <div class="card shadow-none">
                <div class="scrollbar-overlay nine-dots-dropdown">
                  <div class="card-body px-3">
                    <div class="row text-center gx-0 gy-0">
                        <div class="col-12"><a class="btn btn-outline-primary btn-sm mt-4" href="#!">Show more</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="nav-item dropdown"><a class="nav-link pe-0 ps-2" id="navbarDropdownUser" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <div class="avatar avatar-xl">
                <img class="rounded-circle" src="../assets/img/team/3-thumb.png" alt="" />
              </div>
            </a>
            <div class="dropdown-menu dropdown-menu-end py-0" aria-labelledby="navbarDropdownUser">
              <div class="bg-white dark__bg-1000 rounded-2 py-2">
                <a class="dropdown-item fw-bold text-warning" href="#!"><span class="fas fa-crown me-1"></span><span>Go Pro</span></a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#!">Set status</a>
                <a class="dropdown-item" href="../pages/user/profile.html">Profile &amp; account</a>
                <a class="dropdown-item" href="#!">Feedback</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="../pages/user/settings.html">Settings</a>
                <a class="dropdown-item" href="../pages/authentication/card/logout.html">Logout</a>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    )
}

export default Top2;