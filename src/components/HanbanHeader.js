import React from "react";

const KanbanHeader = () => {
    return (
    <div class="row gx-0 kanban-header rounded-2 px-card py-2 mt-1 mb-3">
            <div class="col d-flex align-items-center">
                <a href="" class="btn btn-falcon-default btn-sm" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Back" aria-label="Back"><span class="fa fa-arrow-left"></span></a>

            <h5 class="mb-0 ms-3">title</h5>
            <div class="vertical-line vertical-line-400 position-relative h-100 mx-3"></div>
            <ul class="nav avatar-group mb-0 d-none d-md-flex">
                <li class="nav-item dropdown"></li>

                <li class="nav-item dropdown"><a class="nav-link p-0 dropdown-toggle dropdown-caret-none" href="#" role="button" data-bs-toggle="dropdown">
                    <div class="avatar avatar-l">
                        <img class="rounded-circle" src="" alt="" />
                    </div>
                </a>
                    <div class="dropdown-menu dropdown-md px-0 py-3">
                        <div class="d-flex align-items-center position-relative px-3">
                            <div class="avatar avatar-2xl me-2">
                                <img class="rounded-circle" src="" alt="" />
                            </div>
                            <div class="flex-1">
                                <h6 class="mb-0"><a class="stretched-link text-900" href="#">Anna Karinina</a></h6>
                                <p class="mb-0 fs--2 text-500">Member</p>
                            </div>
                        </div>
                        <hr class="my-2" /><a class="dropdown-item" href="#!">Member Rule</a><a class="dropdown-item text-danger" href="#!">Remove Member</a>
                    </div>
                </li>
                <li class="nav-item dropdown"><a class="nav-link dropdown-toggle dropdown-caret-none p-0 ms-n1" href="#" role="button" data-bs-toggle="dropdown">
                    <div class="avatar avatar-l">
                        <div class="avatar-name rounded-circle avatar-button"><span>2+</span></div>
                    </div>
                </a>
                    <div class="dropdown-menu dropdown-md">
                        <h6 class="dropdown-header py-0 px-3 mb-0">Board Members</h6>
                        <div class="dropdown-divider"></div>
                        <div class="d-flex px-3"><a class="me-2" href="#" data-bs-toggle="tooltip" title="Anna Karinina">
                            <div class="avatar avatar-xl">
                                <img class="rounded-circle" src="" alt="" />
                            </div>
                        </a><a class="me-2" href="#" data-bs-toggle="tooltip" title="Antony Hopkins">
                                <div class="avatar avatar-xl">
                                    <img class="rounded-circle" src="" alt="" />
                                </div>
                            </a><a class="me-2" href="#" data-bs-toggle="tooltip" title="Rowan Atkinson">
                                <div class="avatar avatar-xl">
                                    <img class="rounded-circle" src="" alt="" />
                                </div>
                            </a><a class="me-2" href="#" data-bs-toggle="tooltip" title="John Doe">
                                <div class="avatar avatar-xl">
                                    <img class="rounded-circle" src=""  alt="" />
                                </div>
                            </a><a class="me-2" href="#" data-bs-toggle="tooltip" title="Emily Rose">
                                <div class="avatar avatar-xl">
                                    <img class="rounded-circle" src=""  alt="" />
                                </div>
                            </a><a href="#" data-bs-toggle="tooltip" title="Marry Jane">
                                <div class="avatar avatar-xl">
                                    <img class="rounded-circle" src=""  alt="" />
                                </div>
                            </a></div>
                    </div>
                </li>
            </ul>
            <div class="vertical-line vertical-line-400 position-relative h-100 mx-3 d-none d-md-flex"></div>
            <div class="position-relative"><button class="btn btn-sm btn-falcon-default dropdown-toggle dropdown-caret-none" id="invitePeople" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="fas fa-plus me-2"></span>Invite</button>
                <div class="dropdown-menu dropdown-menu-end pt-2 pb-0" aria-labelledby="invitePeople" >
                    <h6 class="dropdown-header text-center text-uppercase py-1 fs--2 ls fw-semi-bold">Invite To Board</h6>
                    <div class="dropdown-divider mb-0"></div>
                    <div class="p-3">
                        <form>
                            <div class="border rounded-1 fs--2 mb-3">
                                <div class="d-flex flex-between-center border-bottom bg-200">
                                    <div class="px-2 text-700">Anyone with the link can join</div>
                                    <div class="border-start"><button class="btn btn-link btn-sm text-decoration-none hover-300 rounded-0 fs--2" id="dataCopy" type="button" data-copy="#invite-link" data-bs-toggle="tooltip" data-bs-trigger="manual" title="Copy to clipboard"> <span class="far fa-copy me-2"></span>Copy link</button></div>
                                </div><input class="form-control bg-white dark__bg-dark border-0 fs--2 px-1 rounded-top-0" id="invite-link" type="text" readonly="readonly" value="https://prium.github.io/falcon/kanban/QhNCShh8TdxKx0kYN1oWzzKJDjOYUXhm9IJ035laUVdWMYsUN5" />
                            </div><input class="form-control form-control-sm" type="text" placeholder="Enter name or email" /><button class="btn btn-primary btn-sm d-block w-100 mt-2" type="button">Send Invitation</button>
                        </form>
                    </div>
                </div>
            </div>
        </div><div class="col-auto d-flex align-items-center">
                <button class="btn btn-sm btn-falcon-default dropdown-toggle dropdown-caret-none " data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><span class="fas  fa-palette"></span></button>
            </div>
</div>
    );
};

export default KanbanHeader;