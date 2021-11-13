import React, { Component } from "react";
import "./PostA.scss";
import ReactDom from "react-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Markdown from "../Markdown/Markdown";
import CommentSection from "../CommentSection/CommentSection";

export default class PostA extends Component {
  content = `
# Fumo dedit

## Notitiamque videat ferre vindicet potestas hactenus longa

Lorem markdownum nuper ira? Ingemuit et magni. Arma lenius, *nec suis fuissem*
et stirpe iustius caeli? Te sibi scilicet? Solum figere inexperrectus oves
magnosque facta at avita nactusque lemnius humanas, post non solidumve cinnama.

![Hello World](https://images.unsplash.com/photo-1636654153243-2e894af764a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2574&q=80)
~~~c#
    http -= laptop_wildcard_database;
    windows_access = 3;
    dll_table = pitch(antivirusMebibyte(phreakingRpmStreaming, primarySolid,
            webSnippetWizard), 721457, gamma) + itunesNull;
    if (architecture(-1, pitch + sync_drive, defragment_peripheral_optical) !=
            4) {
        pupCore.spreadsheet += laptop + 5;
        ssd.cold += nosql * system_transistor_veronica * topologyCharacter;
        kilobyteZero = debug(browser_troubleshooting_mnemonic, platform, -4);
    }
~~~
## Altior cumque

In longa merito adhuc aequora semper. Et sacra, in Dryope in matres avi, mea
corpus! Valuere si molle, mihi.
~~~cpp
    inbox = c_icmp - keywords_inbox;
    memoryUserLanguage(file(nodeBoot(base_cluster, 4, spreadsheetCplMetal), vlb,
            hackerComponentSata), 4, spoofing + lion_faq(hubSpreadsheetPretest,
            compression, httpsDomain));
    pseudocode_website_traceroute.deleteAccess += 3 / multitasking +
            bootExtension(ddrVirus / extension_directory);
    workstation_peopleware_cluster = 23;
    network_trinitron_management -= shellAdf;
~~~
[Sub](http://pectore-quaerensque.net/) coma bovis fecerit quem tellus factus
enim sensu matri cadunt sanguine placidis. Dixit circumvolat signa pressum
testa, inritamen robora in exturbare plura petitum iuvenesque Cepheus atque;
fama ad. Funestaque iuguloque condi timidumque; septem [leti
proxima](http://fores.io/) cibi, ergo, est numen Procnes, ille inde liquidum
sua. Labores terret! Pennaeque illo discretus concipit **fumant**.

## Gravis caeli tepido

Mota antiquas praesepibus tibi inproba, restat similesque parentis fictus; per
ex [armentaque](http://www.aeternumatque.io/etcrimina.aspx) in amores manetque
et, classem. Sub est illa Venerem summa terram et Ascanii furibunda solent
functa partem, nulla.

Magnoque veri hosti, aut quam muta Hyanteo pressique congestis duce. Murice fuit
et membris armenti fata moras, quid est pendentibus florentis, velles ore verus
possumus?

> Deus percusso, clamor fecere, tamen germanam damni accedere, flavescere aut;
> nec nec agat. Cederet tamen, dantem et nihil, ministros meo. Fuit protentaque
> Naryciusque [mea creatus](http://www.doloris.net/) velant vi una Aeneaeque,
> sanguine edidit, alias armis. Peregit hortos paratis, est moram harena,
> genitore petit!

Non nunc patriam. Dira fraude et pervigilem, sanguine ad cutis inposito in tura
Alcithoe orbem at, faciemque arduus. Sequi metu dixit puris occupat famem,
ipsumque flammas gestanda sole; non ad. Cum tulit religata viveret iuncta
concussa en procul pectora se vale sic. Imago discriminis circum aliud inscius
[at](http://piae.com/nec) terram erunt, ad proboque contra!
  

# Fumo dedit

## Notitiamque videat ferre vindicet potestas hactenus longa

Lorem markdownum nuper ira? Ingemuit et magni. Arma lenius, *nec suis fuissem*
et stirpe iustius caeli? Te sibi scilicet? Solum figere inexperrectus oves
magnosque facta at avita nactusque lemnius humanas, post non solidumve cinnama.

~~~c#
    http -= laptop_wildcard_database;
    windows_access = 3;
    dll_table = pitch(antivirusMebibyte(phreakingRpmStreaming, primarySolid,
            webSnippetWizard), 721457, gamma) + itunesNull;
    if (architecture(-1, pitch + sync_drive, defragment_peripheral_optical) !=
            4) {
        pupCore.spreadsheet += laptop + 5;
        ssd.cold += nosql * system_transistor_veronica * topologyCharacter;
        kilobyteZero = debug(browser_troubleshooting_mnemonic, platform, -4);
    }
~~~
## Altior cumque

In longa merito adhuc aequora semper. Et sacra, in Dryope in matres avi, mea
corpus! Valuere si molle, mihi.
~~~cpp
    inbox = c_icmp - keywords_inbox;
    memoryUserLanguage(file(nodeBoot(base_cluster, 4, spreadsheetCplMetal), vlb,
            hackerComponentSata), 4, spoofing + lion_faq(hubSpreadsheetPretest,
            compression, httpsDomain));
    pseudocode_website_traceroute.deleteAccess += 3 / multitasking +
            bootExtension(ddrVirus / extension_directory);
    workstation_peopleware_cluster = 23;
    network_trinitron_management -= shellAdf;
~~~
[Sub](http://pectore-quaerensque.net/) coma bovis fecerit quem tellus factus
enim sensu matri cadunt sanguine placidis. Dixit circumvolat signa pressum
testa, inritamen robora in exturbare plura petitum iuvenesque Cepheus atque;
fama ad. Funestaque iuguloque condi timidumque; septem [leti
proxima](http://fores.io/) cibi, ergo, est numen Procnes, ille inde liquidum
sua. Labores terret! Pennaeque illo discretus concipit **fumant**.

## Gravis caeli tepido

Mota antiquas praesepibus tibi inproba, restat similesque parentis fictus; per
ex [armentaque](http://www.aeternumatque.io/etcrimina.aspx) in amores manetque
et, classem. Sub est illa Venerem summa terram et Ascanii furibunda solent
functa partem, nulla.

Magnoque veri hosti, aut quam muta Hyanteo pressique congestis duce. Murice fuit
et membris armenti fata moras, quid est pendentibus florentis, velles ore verus
possumus?

> Deus percusso, clamor fecere, tamen germanam damni accedere, flavescere aut;
> nec nec agat. Cederet tamen, dantem et nihil, ministros meo. Fuit protentaque
> Naryciusque [mea creatus](http://www.doloris.net/) velant vi una Aeneaeque,
> sanguine edidit, alias armis. Peregit hortos paratis, est moram harena,
> genitore petit!

Non nunc patriam. Dira fraude et pervigilem, sanguine ad cutis inposito in tura
Alcithoe orbem at, faciemque arduus. Sequi metu dixit puris occupat famem,
ipsumque flammas gestanda sole; non ad. Cum tulit religata viveret iuncta
concussa en procul pectora se vale sic. Imago discriminis circum aliud inscius
[at](http://piae.com/nec) terram erunt, ad proboque contra!
  
  `;
  render() {
    return (
      <div className="post">
        <div className="post-section">
          <Markdown markdown={this.content} />
        </div>

        <div className="post-action">p</div>
        <div className="comment-section"></div>
        <CommentSection />
      </div>
    );
  }
}
