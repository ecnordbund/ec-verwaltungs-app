import Vue from 'vue';
import { Auth } from '@/plugins/auth';
import ApolloClient from 'apollo-boost';
import filterUtil from "@/util/filter.util";
import reportUtil from "@/util/report.util";
import iconUtil from "@/util/icon.util";
declare module 'vue/types/vue' {
  interface Vue {
    $authToken: string;
    $apolloClient: ApolloClient<any>;
    $login: (username: string, password: string) => Promise<never>;
    $logout: () => void;
    $util: {
      filter: typeof filterUtil,
      report: typeof reportUtil,
      icon: typeof iconUtil
    };
    $setAuthToken: (authToken: string) => void;
    $notifikation: (title: string, body: string) => Notification;
  }
}
