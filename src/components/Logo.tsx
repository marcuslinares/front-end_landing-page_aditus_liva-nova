import Image from "next/image";

export default function Logo(){
  return(
    <div>
          <Image
            aria-hidden
            src="/assets/aditus-logo.png"
            alt="File icon"
            width={400}
            height={116}
          />
    </div>
  )
}