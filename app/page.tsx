"use client"
import Image from 'next/image'
import { WagmiConfig, createConfig } from "wagmi";
import { ConnectKitProvider, ConnectKitButton, getDefaultConfig } from "connectkit";

const infuraId = "e3dc853878bd4c64988e5f9257277860"
const walletConnectProjectId = "e9ec3192cd1d8ffe89c3cd0d83672706"

const config = createConfig(
  getDefaultConfig({
    infuraId: infuraId, 
    walletConnectProjectId: walletConnectProjectId,
    // Required
    appName: "tax-loss-harvester",
    // Optional
    appDescription: "Your App Description",
    appUrl: "https://family.co", // your app's url
    appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
  }),
);

export default function Home() {
  return (
    <main className="min-h-screen">
      <WagmiConfig config={config}>
      <ConnectKitProvider>
        <div className="flex flex-col sm:flex-row h-[85%] justify-between m-10 items-center">
        <image> logo </image>
          <div className="flex flex-row">
            <p className="pr-10 pl-10">Home</p>
            <p className="pr-10 pl-10">About</p>
            <p className="pr-10 pl-10">Contact</p>
          </div>
        <ConnectKitButton />
        </div>
        <div className = "flex flex-row h-85 justify-center m-15 items-center">
          <div className="flex flex-col">
            <h1> Tax Loss Harvester</h1>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pharetra tortor 
              lobortis nulla sollicitudin suscipit id non dolor. Sed sodales erat vestibulum, 
              gravida velit et, ornare urna. Phasellus sed neque lobortis, fringilla lacus vel, 
              feugiat eros. Nulla enim nisi, sodales quis elementum vitae, hendrerit a magna. 
              Cras sit amet tellus nibh. Aliquam feugiat nec tellus vitae varius.</p>
          </div>
          <div>
            <img src= "https://mms.businesswire.com/media/20220131005280/en/1343253/5/Unknown.jpg" alt="BigCo Inc. logo"className='max-w-md	max-h-md'/>
          </div>
        </div>
      </ConnectKitProvider>
    </WagmiConfig>
    </main>
  )
}
