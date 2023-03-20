import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/accordion";

const Equipment = () => {
  return (
    <Accordion id="equipment" className="w-full" allowMultiple>
      <div>
        <h2 className="text-center text-gray-700 p-4">Equipment</h2>
      </div>
      <AccordionItem className="border-b border-gray-200  dark:!border-white/10 ">
        <h2>
          <AccordionButton className="flex justify-between text-center bg-gray-700">
            <span
              className="text-center text-gray-100 p-4 "
              //   flex="1"
              //   textAlign="center"
            >
              AD/DA
            </span>
            <AccordionIcon className="text-left !text-navy-100 dark:!text-gray" />
          </AccordionButton>
        </h2>
        <AccordionPanel className="text-center text-gray-700 p-4" pb={4}>
          <h3 className="text-center text-gray-700 p-4">
            Antelope Audio Orion 32
          </h3>
          <h3 className="text-center text-gray-700 p-4">
            32 simultaneous channels of I/O up to 192khz
          </h3>
        </AccordionPanel>
      </AccordionItem>{" "}
      <AccordionItem className="border-b border-gray-200  dark:!border-white/10">
        <h2>
          <AccordionButton className="flex justify-between bg-gray-700">
            <span
              className="text-center text-gray-100 p-4"
              //   flex="1"
              //   textAlign="center"
            >
              Analogue Recording
            </span>
            <AccordionIcon className="text-left !text-navy-900 dark:!text-gray" />
          </AccordionButton>
        </h2>
        <AccordionPanel className="text-center text-gray-700 p-4" pb={4}>
          <h3 className="text-center text-gray-700 p-4">
            Otari MTR90Mk11 2″ 24 track tape machine
          </h3>
          <h3 className="text-center text-gray-700 p-4">
            Full Remote control for MTR 90 Tape Machine
          </h3>
          <h3 className="text-center text-gray-700 p-4">
            Fostex B16 1/2″ 16 Track Tape Machine
          </h3>
          <h3 className="text-center text-gray-700 p-4">
            Fostex 4050 Remote Control for B16
          </h3>
        </AccordionPanel>
      </AccordionItem>{" "}
      <AccordionItem className="border-b border-gray-200  dark:!border-white/10">
        <h2>
          <AccordionButton className="flex justify-between bg-gray-700">
            <span
              className="text-center text-gray-100 p-4"
              //   flex="1"
              //   textAlign="center"
            >
              Computer
            </span>
            <AccordionIcon className="text-left !text-navy-900 dark:!text-gray" />
          </AccordionButton>
        </h2>
        <AccordionPanel className="text-center text-gray-700 p-4" pb={4}>
          <h2>Studio A</h2>
          <h3 className="text-center text-gray-700 p-4">
            Custom Built Hackintosh
          </h3>
          <h3 className="text-center text-gray-700 p-4">Quad Core 4.2Ghz</h3>
          <h3 className="text-center text-gray-700 p-4">32GB Ram</h3>
          <h3 className="text-center text-gray-700 p-4">
            256GB Solid State Drive
          </h3>
          <h3 className="text-center text-gray-700 p-4">2TB Drive</h3>
          <h3 className="text-center text-gray-700 p-4">Water Cooled</h3>
          <h2>Studio B</h2>
          <h3 className="p-4">iMac 16GB RAM</h3>
        </AccordionPanel>
      </AccordionItem>{" "}
      <AccordionItem className="border-b border-gray-200  dark:!border-white/10">
        <h2>
          <AccordionButton className="flex justify-between bg-gray-700">
            <span
              className="text-center text-gray-100 p-4"
              //   flex="1"
              //   textAlign="center"
            >
              Software
            </span>
            <AccordionIcon className="text-left !text-navy-900 dark:!text-gray" />
          </AccordionButton>
        </h2>
        <AccordionPanel className="text-center text-gray-700 p-4" pb={4}>
          <h3 className="text-center text-gray-700 p-4">
            Pro Tools 2020 (latest)
          </h3>
          <h3 className="text-center text-gray-700 p-4">Logic Pro X</h3>
          <h3 className="text-center text-gray-700 p-4">Ableton 10</h3>
          <h3 className="text-center text-gray-700 p-4">Reaper 4.5</h3>
          <h3 className="text-center text-gray-700 p-4">
            ‘Everything Bundle’ of UAD Plugins
          </h3>
          <h3 className="text-center text-gray-700 p-4">
            Full Sound Toys suite of Plugins
          </h3>
          <h3 className="text-center text-gray-700 p-4">Waves Plugins</h3>
          <h3 className="text-center text-gray-700 p-4">
            Various others including SoundRadix
          </h3>
        </AccordionPanel>
      </AccordionItem>{" "}
      <AccordionItem className="border-b border-gray-200  dark:!border-white/10">
        <h2>
          <AccordionButton className="flex justify-between bg-gray-700">
            <span
              className="text-center text-gray-100 p-4"
              //   flex="1"
              //   textAlign="center"
            >
              Control Room Monitoring
            </span>
            <AccordionIcon className="text-left !text-navy-900 dark:!text-gray" />
          </AccordionButton>
        </h2>
        <AccordionPanel className="text-center text-gray-700 p-4" pb={4}>
          <h3 className="text-center text-gray-700 p-4">
            Imperium 2400 Mastering Grade Monitor Controller
          </h3>
          <h3 className="text-center text-gray-700 p-4">Quested V2108 Pair</h3>
          <h3 className="text-center text-gray-700 p-4">Adam A77X Pair</h3>
          <h3 className="text-center text-gray-700 p-4">
            Yamaha NS10, Pair (Linn Amp)
          </h3>
          <h3 className="text-center text-gray-700 p-4">Genelecs 8020s Pair</h3>
        </AccordionPanel>
      </AccordionItem>{" "}
      <AccordionItem className="border-b border-gray-200  dark:!border-white/10">
        <h2>
          <AccordionButton className="flex justify-between bg-gray-700">
            <span
              className="text-center text-gray-100 p-4"
              //   flex="1"
              //   textAlign="center"
            >
              Live Room Monitoring
            </span>
            <AccordionIcon className="text-left !text-navy-900 dark:!text-gray" />
          </AccordionButton>
        </h2>
        <AccordionPanel className="text-center text-gray-700 p-4" pb={4}>
          <h3 className="text-center text-gray-700 p-4">
            5 x Behringer Powerplay Hearback System
          </h3>
          <h3 className="text-center text-gray-700 p-4">
            Art 6 Channel Headphone Amp
          </h3>
          <h3 className="text-center text-gray-700 p-4">
            6 x Audio Technica ATH-M50X
          </h3>
          <h3 className="text-center text-gray-700 p-4">
            2 x Beyer DT100 Headphones
          </h3>
          <h3 className="text-center text-gray-700 p-4">
            2 x Sennheiser 201 Headphones
          </h3>
          <h3 className="text-center text-gray-700 p-4">
            1 x Vic Firth Drummer Isolation Headphones
          </h3>
          <h3 className="text-center text-gray-700 p-4">
            2 x Powered PA speakers (SRM 450)
          </h3>
        </AccordionPanel>
      </AccordionItem>{" "}
      <AccordionItem className="border-b border-gray-200  dark:!border-white/10">
        <h2>
          <AccordionButton className="flex justify-between bg-gray-700">
            <span
              className="text-center text-gray-100 p-4"
              //   flex="1"
              //   textAlign="center"
            >
              Outboard
            </span>
            <AccordionIcon className="text-left !text-navy-900 dark:!text-gray" />
          </AccordionButton>
        </h2>
        <AccordionPanel className="text-center text-gray-700 p-4" pb={4}>
          <h3 className="text-center text-gray-700 p-4">
            1 x 6176 Mic Pre and Compressor
          </h3>
          <h3 className="text-center text-gray-700 p-4">
            10 x CAPI 500 Series Mic Pre’s in a 10 slot API (two with DI)
          </h3>
          <h3 className="text-center text-gray-700 p-4">
            2 x 4 Channel Neve 4081s (8 Channels of Neve Pres)
          </h3>
          <h3 className="text-center text-gray-700 p-4">
            2 x Burl B1D Preamps
          </h3>
          <h3 className="text-center text-gray-700 p-4">
            2 x Empirical Labs Distressors
          </h3>
          <h3 className="text-center text-gray-700 p-4">6 Channel API Clone</h3>
          <h3 className="text-center text-gray-700 p-4">
            1 Channel Neve Clone
          </h3>
          <h3 className="text-center text-gray-700 p-4">
            TL Audio 5051 Valve preamp eq comp
          </h3>
          <h3 className="text-center text-gray-700 p-4">
            TL Audio 5050 Valve preamp comp
          </h3>
          <h3 className="text-center text-gray-700 p-4">
            TL Audio 5021 Valve Dual Channel Comp
          </h3>
          <h2 className="p-4">And Much More</h2>
        </AccordionPanel>
      </AccordionItem>{" "}
      <AccordionItem className="border-b border-gray-200  dark:!border-white/10">
        <h2>
          <AccordionButton className="flex justify-between bg-gray-700">
            <span
              className="text-center text-gray-100 p-4"
              //   flex="1"
              //   textAlign="center"
            >
              Microphones
            </span>
            <AccordionIcon className="text-left !text-navy-900 dark:!text-gray" />
          </AccordionButton>
        </h2>
        <AccordionPanel className="text-center text-gray-700 p-4" pb={4}>
          <h3 className="text-center text-gray-700 p-4">
            1 x 1969 Neumann CMV563 with M7 Capsule (U47 capsule)<br></br>
            <br></br> 1 x Royer 121<br></br>
            <br></br>1 x Sony c100 4 x Unidyne vintage 57s<br></br>
            <br></br> 3 x SM57<br></br>
            <br></br> 1 x SM7b<br></br>
            <br></br> 1 x Beyer M160<br></br>
            <br></br>2 x SEz5600a
            <br></br>
            <br></br> 1 x Nady RSM2 1 x M88 beyer<br></br>
            <br></br> 1 x Rode NTK <br></br>
            <br></br>4 x PZM contact mics<br></br>
            <br></br> 1 x Prologue
            <br></br>
            <br></br> 3 x AKG 300 B <br></br>
            <br></br>2 x KSM 313<br></br>
            <br></br>2 x Sennheiser 421<br></br>
            <br></br> 3 x Shure Beta 57<br></br>
            <br></br> 3 x Shure Beta 98<br></br>
            <br></br> 2 x Shure Beta 52 <br></br>
            <br></br>1 x Shure Beta 91A<br></br>
            <br></br> 1 x Yamaha Subkick <br></br>
            <br></br>2 x KSM 9 <br></br>
            <br></br>1 x KSM 137<br></br>
            <br></br>2 x Shure Beta 181 <br></br>
            <br></br>2 x Shure SM57 <br></br>
            <br></br>2 x DPA 4091
          </h3>
          {/* <h3 className="text-center text-gray-700 p-4">
            32 simultaneous channels of I/O up to 192khz
          </h3> */}
        </AccordionPanel>
      </AccordionItem>{" "}
      <AccordionItem className="border-b border-gray-200  dark:!border-white/10">
        <h2>
          <AccordionButton className="flex justify-between bg-gray-700">
            <span
              className="text-center text-gray-100 p-4"
              //   flex="1"
              //   textAlign="center"
            >
              Instruments
            </span>
            <AccordionIcon className="text-left !text-navy-900 dark:!text-gray" />
          </AccordionButton>
        </h2>
        <AccordionPanel className="text-center text-gray-700 p-4" pb={4}>
          <h2 className="py-4">
            We have many different instruments including:
          </h2>
          <h2>Keys</h2>
          <h3 className="text-center text-gray-700 p-4">
            Elysian 10ft Concert Grand Piano (regularly tuned; additional tuning
            at clients request / cost £60)
          </h3>
          <h3 className="text-center text-gray-700 p-4">
            Petrof Upright Piano (regularly tuned; additional tuning at clients
            request / cost £60)
          </h3>
          <h3 className="text-center text-gray-700 p-4">Fender Rhodes</h3>
          <h2 className="py-4">Drum Kits</h2>
          <h3 className="text-center text-gray-700 p-4">
            Gretsch ’72 Remo Heads
          </h3>
          <h3 className="text-center text-gray-700 p-4">
            Premier 80s Aquarian Heads
          </h3>
          <h3 className="text-center text-gray-700 p-4">
            Pearl Export Remo Heads
          </h3>
          <h2 className="py-4">Guitars</h2>
          <h3 className="text-center text-gray-700 p-4">Telecaster</h3>
          <h3 className="text-center text-gray-700 p-4">
            Gretsch Electromatic
          </h3>
          <h3 className="text-center text-gray-700 p-4">
            Fender Malibu Acoustic
          </h3>
          <h2 className="py-4">Amps</h2>
          <h3 className="text-center text-gray-700 p-4">
            Fender Twin Amplifier
          </h3>
          <h3 className="text-center text-gray-700 p-4">
            Orange Thunderverb 200 Head
          </h3>
          <h3 className="text-center text-gray-700 p-4">Marshall JCM800</h3>
          <h2 className="py-4">And Much More</h2>
        </AccordionPanel>
      </AccordionItem>{" "}
      <hr className="text-"></hr>
    </Accordion>
  );
};

export default Equipment;
