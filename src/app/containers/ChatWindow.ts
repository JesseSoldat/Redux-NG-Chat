import { Inject, Component, ElementRef } from '@angular/core';
import { AppStore } from '../app.store';
import { Store } from 'redux';
import { User, Thread } from '../models';
import { ThreadActions } from '../actions';