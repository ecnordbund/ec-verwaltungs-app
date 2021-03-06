import Vue from 'vue';
import ApolloClient from 'apollo-boost';
import filterUtil from '@/util/filter.util';
import reportUtil from '@/util/report.util';
import iconUtil from '@/util/icon.util';
import lesezeichenUtil from '@/util/lesezeichen.util';

import { api } from "../../api/src/api";

declare module 'vue/types/vue' {
  interface Vue {
    $authToken: () => string;
    $apolloClient: ApolloClient<any>;
    
    $login: (username: string, password: string, superadmin: (users:Array<string>)=>Promise<string>) => Promise<api>;
    $api: api
    //$logout: () => void;
    $util: {
      filter: typeof filterUtil,
      report: typeof reportUtil,
      icon: typeof iconUtil,
      lesezeichen: typeof lesezeichenUtil
    };
    $setAuthToken: (authToken: string) => void;
    $notifikation: (title: string, body: string) => Notification;
    $setInactiveHandler: (cb: () => void) => void;
    $empty: () => void;
  }
}
