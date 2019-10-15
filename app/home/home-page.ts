/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

import { EventData, fromObject } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";

var page: Page;

const tempSessions = [
  {
    id: "0",
    title: "session 1"
  },
  {
    id: "1",
    title: "session 2"
  },
  {
    id: "2",
    title: "session 3"
  },
  {
    id: "3",
    title: "session 4"
  }
];

const HomeViewModel = require("./home-view-model");

function onNavigatingTo(args) {
  page = args.object;
  page.bindingContext = new HomeViewModel();
}

export function pageloaded(args: EventData) {
  page = <Page>args.object;
  const mySessions = fromObject({
    sessions: tempSessions
  });

  page.bindingContext = mySessions;
}

exports.onNavigatingTo = onNavigatingTo;
