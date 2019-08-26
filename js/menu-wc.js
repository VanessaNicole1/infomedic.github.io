'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
            constructor() {
                super();
                this.isNormalMode = this.getAttribute('mode') === 'normal';
            }

            connectedCallback() {
                this.render(this.isNormalMode);
            }

            render(isNormalMode) {
                    let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">hospital-advanced documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-458b239bda02ca4031862089bd271a39"' : 'data-target="#xs-components-links-module-AppModule-458b239bda02ca4031862089bd271a39"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-458b239bda02ca4031862089bd271a39"' :
                                            'id="xs-components-links-module-AppModule-458b239bda02ca4031862089bd271a39"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RegisterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PagesModule.html" data-type="entity-link">PagesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PagesModule-869e7f7b7f28789db5327bf33def7e10"' : 'data-target="#xs-components-links-module-PagesModule-869e7f7b7f28789db5327bf33def7e10"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PagesModule-869e7f7b7f28789db5327bf33def7e10"' :
                                            'id="xs-components-links-module-PagesModule-869e7f7b7f28789db5327bf33def7e10"' }>
                                            <li class="link">
                                                <a href="components/BusquedaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BusquedaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CitasComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CitasComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CitasDiariasComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CitasDiariasComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConsultaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ConsultaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConsultasComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ConsultasComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EspecialidadComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EspecialidadComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GraphicsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GraphicsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HistorialComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HistorialComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MedicoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MedicoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MedicosComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MedicosComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ModalUploadComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ModalUploadComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PagesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PagesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProfileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProgressComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProgressComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SolicitarCitaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SolicitarCitaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UsuariosComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UsuariosComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PipesModule.html" data-type="entity-link">PipesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-PipesModule-fb8ad21aec48a27f6841aaad4cd5ca2b"' : 'data-target="#xs-pipes-links-module-PipesModule-fb8ad21aec48a27f6841aaad4cd5ca2b"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-PipesModule-fb8ad21aec48a27f6841aaad4cd5ca2b"' :
                                            'id="xs-pipes-links-module-PipesModule-fb8ad21aec48a27f6841aaad4cd5ca2b"' }>
                                            <li class="link">
                                                <a href="pipes/ImagenPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ImagenPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ServicesModule.html" data-type="entity-link">ServicesModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ServicesModule-126eecc07d7572f7c4f224ca709b0825"' : 'data-target="#xs-injectables-links-module-ServicesModule-126eecc07d7572f7c4f224ca709b0825"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ServicesModule-126eecc07d7572f7c4f224ca709b0825"' :
                                        'id="xs-injectables-links-module-ServicesModule-126eecc07d7572f7c4f224ca709b0825"' }>
                                        <li class="link">
                                            <a href="injectables/EspecialidadService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>EspecialidadService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LoginService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>LoginService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/MedicoService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>MedicoService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ModalUploadService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ModalUploadService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SettingsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>SettingsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SharedService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>SharedService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SidebarService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>SidebarService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SubirArchivoService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>SubirArchivoService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsuarioService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>UsuarioService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-effa25127cb11a792069c8933ecf38ab"' : 'data-target="#xs-components-links-module-SharedModule-effa25127cb11a792069c8933ecf38ab"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-effa25127cb11a792069c8933ecf38ab"' :
                                            'id="xs-components-links-module-SharedModule-effa25127cb11a792069c8933ecf38ab"' }>
                                            <li class="link">
                                                <a href="components/BreadcrumbsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BreadcrumbsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NopagefoundComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NopagefoundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidebarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SidebarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Admin.html" data-type="entity-link">Admin</a>
                            </li>
                            <li class="link">
                                <a href="classes/Cita.html" data-type="entity-link">Cita</a>
                            </li>
                            <li class="link">
                                <a href="classes/Especialidad.html" data-type="entity-link">Especialidad</a>
                            </li>
                            <li class="link">
                                <a href="classes/Historial.html" data-type="entity-link">Historial</a>
                            </li>
                            <li class="link">
                                <a href="classes/Medico.html" data-type="entity-link">Medico</a>
                            </li>
                            <li class="link">
                                <a href="classes/Persona.html" data-type="entity-link">Persona</a>
                            </li>
                            <li class="link">
                                <a href="classes/Usuario.html" data-type="entity-link">Usuario</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/CitaService.html" data-type="entity-link">CitaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EspecialidadService.html" data-type="entity-link">EspecialidadService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoginService.html" data-type="entity-link">LoginService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MedicoService.html" data-type="entity-link">MedicoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ModalUploadService.html" data-type="entity-link">ModalUploadService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SettingsService.html" data-type="entity-link">SettingsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SharedService.html" data-type="entity-link">SharedService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SidebarService.html" data-type="entity-link">SidebarService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SubirArchivoService.html" data-type="entity-link">SubirArchivoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsuarioService.html" data-type="entity-link">UsuarioService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AdminGuard.html" data-type="entity-link">AdminGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/LoginGuardGuard.html" data-type="entity-link">LoginGuardGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/VerificatokenGuard.html" data-type="entity-link">VerificatokenGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>

                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});