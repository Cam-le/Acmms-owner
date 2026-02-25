import svgPaths from "./svg-w1a354o8ns";
import imgImage14 from "figma:asset/f7ce911cc8bfe36f35ab855f0abcae9d107218f6.png";

function Heading1() {
  return (
    <div className="h-[31.989px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[32px] left-0 text-[#115e59] text-[24px] top-[-2.61px]">Quản lý nhân viên</p>
    </div>
  );
}

function Paragraph() {
  return <div className="h-[24.006px] shrink-0 w-full" data-name="Paragraph" />;
}

function Container1() {
  return (
    <div className="h-[59.991px] relative shrink-0 w-[304.782px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.996px] items-start relative size-full">
        <Heading1 />
        <Paragraph />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[15.99px] size-[15.994px] top-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9943 15.9943">
        <g id="Icon">
          <path d="M3.33213 7.99716H12.6621" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d="M7.99716 3.33215V12.6622" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#009689] h-[39.991px] relative rounded-[10px] shrink-0 w-[174.877px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon />
        <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[98.98px] text-[16px] text-center text-white top-[6.2px]">Thêm Nhân Viên</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex h-[59.991px] items-start justify-between left-[24px] top-[24px] w-[819.886px]" data-name="Container">
      <Container1 />
      <Button />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#009689] h-[39.991px] relative rounded-[10px] shrink-0 w-[73.854px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[37.49px] text-[16px] text-center text-white top-[6.2px]">Tất cả</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#f1f5f9] h-[39.991px] relative rounded-[10px] shrink-0 w-[107.945px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[53.99px] text-[#314158] text-[16px] text-center top-[6.2px]">Hoạt động</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#f1f5f9] h-[39.991px] relative rounded-[10px] shrink-0 w-[156.212px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[77.99px] text-[#314158] text-[16px] text-center top-[6.2px]">Không hoạt động</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex gap-[7.992px] h-[39.991px] items-start left-[432.69px] top-[0.6px] w-[353.996px]" data-name="Container">
      <Button1 />
      <Button2 />
      <Button3 />
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute h-[41.184px] left-0 rounded-[10px] top-0 w-[420.691px]" data-name="Text Input">
      <div className="content-stretch flex items-center overflow-clip pl-[40px] pr-[16px] py-[8px] relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-[rgba(10,10,10,0.5)]">Tìm kiếm theo tên, email hoặc ID...</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#cad5e2] border-[0.606px] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[12px] size-[20px] top-[10.59px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M17.5 17.5L13.8833 13.8833" id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pcddfd00} id="Vector_2" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute h-[41.184px] left-0 top-0 w-[420.691px]" data-name="Container">
      <TextInput />
      <Icon1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[41.184px] relative shrink-0 w-full" data-name="Container">
      <Container4 />
      <Container5 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[74.384px] items-start left-[24px] pb-[0.606px] pt-[16.6px] px-[16.6px] rounded-[10px] top-[107.98px] w-[819.886px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.606px] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container3 />
    </div>
  );
}

function HeaderCell() {
  return (
    <div className="absolute h-[72.273px] left-0 top-0 w-[167.472px]" data-name="Header Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[88px] text-[#62748e] text-[14px] top-[23.98px]">Họ Tên</p>
    </div>
  );
}

function HeaderCell1() {
  return (
    <div className="absolute h-[72.273px] left-[167.47px] top-0 w-[218.741px]" data-name="Header Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[86px] text-[#62748e] text-[14px] top-[23.98px]">Email</p>
    </div>
  );
}

function HeaderCell2() {
  return (
    <div className="absolute h-[72.273px] left-[386.21px] top-0 w-[131.477px]" data-name="Header Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[24px] text-[#62748e] text-[14px] top-[23.98px]">Trạng Thái</p>
    </div>
  );
}

function HeaderCell3() {
  return (
    <div className="absolute h-[72.273px] left-[517.69px] top-0 w-[135.066px]" data-name="Header Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[24px] text-[#62748e] text-[14px] top-[21px]">Ngày Gia Nhập</p>
    </div>
  );
}

function HeaderCell4() {
  return (
    <div className="absolute h-[72.273px] left-[652.76px] top-0 w-[165.919px]" data-name="Header Cell">
      <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[83.06px] text-[#62748e] text-[14px] text-center top-[23.98px]">Thao Tác</p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="absolute bg-[#f8fafc] border-[#e2e8f0] border-b-[0.606px] border-solid h-[72.273px] left-0 top-0 w-[818.674px]" data-name="Table Row">
      <HeaderCell />
      <HeaderCell1 />
      <HeaderCell2 />
      <HeaderCell3 />
      <HeaderCell4 />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="absolute h-[72.273px] left-0 top-0 w-[818.674px]" data-name="Table Header">
      <TableRow />
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[#009689] relative rounded-[20336000px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] text-white">MG</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="flex-[1_0_0] h-[48.011px] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24px] left-0 text-[#0f766e] text-[16px] top-[9px]">Maria Garcia</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex gap-[11.998px] h-[48.011px] items-center left-[24px] top-[16.3px] w-[119.479px]" data-name="Container">
      <Container8 />
      <Paragraph1 />
    </div>
  );
}

function TableCell() {
  return (
    <div className="absolute h-[80.606px] left-0 top-0 w-[167.472px]" data-name="Table Cell">
      <Container7 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[24.006px] left-[24px] top-[28.3px] w-[170.748px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#45556c] text-[16px] top-[-1.79px]">maria.garcia@farm.com</p>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="absolute h-[80.606px] left-[167.47px] top-0 w-[218.741px]" data-name="Table Cell">
      <Paragraph2 />
    </div>
  );
}

function Text() {
  return (
    <div className="absolute bg-[#dcfce7] h-[47.973px] left-[24px] rounded-[4px] top-[16.32px] w-[83.485px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[7.99px] text-[#008236] text-[14px] top-[11px]">Hoạt động</p>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute h-[80.606px] left-[386.21px] top-0 w-[131.477px]" data-name="Table Cell">
      <Text />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[24.006px] left-[24px] top-[28.3px] w-[87.074px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#45556c] text-[16px] top-[-1.79px]">15/03/2024</p>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="absolute h-[80.606px] left-[517.69px] top-0 w-[135.066px]" data-name="Table Cell">
      <Paragraph3 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[17.992px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[20.84%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.4938 11.994">
            <path d={svgPaths.p1bb1d200} id="Vector" stroke="var(--stroke-0, #009689)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49937" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99747 5.99747">
            <path d={svgPaths.p29140580} id="Vector" stroke="var(--stroke-0, #009689)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49937" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[33.977px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7.992px] px-[7.992px] relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[17.992px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.9937 14.9937">
            <path d={svgPaths.p33bbcdc0} id="Vector" stroke="var(--stroke-0, #009689)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49937" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.35%_8.35%_33.32%_33.32%]" data-name="Vector">
        <div className="absolute inset-[-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9952 11.9952">
            <path d={svgPaths.p337e2f00} id="Vector" stroke="var(--stroke-0, #009689)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49937" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[33.977px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7.992px] px-[7.992px] relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[17.992px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[45.83%_58.33%_29.17%_41.67%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-0.75px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.49937 5.99747">
            <path d="M0.749684 0.749684V5.24779" id="Vector" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49937" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[45.83%_41.67%_29.17%_58.33%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-0.75px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.49937 5.99747">
            <path d="M0.749684 0.749684V5.24779" id="Vector" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49937" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[8.33%] left-[20.83%] right-[20.83%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-6.25%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9949 13.4943">
            <path d={svgPaths.p2ade80c0} id="Vector" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49937" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[12.5%] right-[12.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-0.75px_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.9937 1.49937">
            <path d="M0.749684 0.749684H14.244" id="Vector" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49937" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[33.33%] right-[33.33%] top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.49684 4.49811">
            <path d={svgPaths.p2d0d5e00} id="Vector" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49937" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[33.977px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7.992px] px-[7.992px] relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex gap-[7.992px] h-[33.977px] items-center justify-center left-[24px] pr-[0.009px] top-[23.31px] w-[117.926px]" data-name="Container">
      <Button4 />
      <Button5 />
      <Button6 />
    </div>
  );
}

function TableCell4() {
  return (
    <div className="absolute h-[80.606px] left-[652.76px] top-0 w-[165.919px]" data-name="Table Cell">
      <Container9 />
    </div>
  );
}

function TableRow1() {
  return (
    <div className="absolute border-[#e2e8f0] border-b-[0.606px] border-solid h-[80.606px] left-0 top-0 w-[818.674px]" data-name="Table Row">
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
      <TableCell4 />
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[#009689] relative rounded-[20336000px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] text-white">JW</p>
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="flex-[1_0_0] h-[48.011px] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24px] left-0 text-[#0f766e] text-[16px] top-[10px]">James Wilson</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex gap-[11.998px] h-[48.011px] items-center left-[24px] top-[16.3px] w-[119.479px]" data-name="Container">
      <Container11 />
      <Paragraph4 />
    </div>
  );
}

function TableCell5() {
  return (
    <div className="absolute h-[80.606px] left-0 top-0 w-[167.472px]" data-name="Table Cell">
      <Container10 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[24.006px] left-[24px] top-[28.3px] w-[170.748px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#45556c] text-[16px] top-[-1.79px]">james.wilson@farm.com</p>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="absolute h-[80.606px] left-[167.47px] top-0 w-[218.741px]" data-name="Table Cell">
      <Paragraph5 />
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute bg-[#dcfce7] h-[47.973px] left-[24px] rounded-[4px] top-[16.32px] w-[83.485px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[7.99px] text-[#008236] text-[14px] top-[11px]">Hoạt động</p>
    </div>
  );
}

function TableCell7() {
  return (
    <div className="absolute h-[80.606px] left-[386.21px] top-0 w-[131.477px]" data-name="Table Cell">
      <Text1 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute h-[24.006px] left-[24px] top-[28.3px] w-[87.074px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#45556c] text-[16px] top-[-1.79px]">22/07/2024</p>
    </div>
  );
}

function TableCell8() {
  return (
    <div className="absolute h-[80.606px] left-[517.69px] top-0 w-[135.066px]" data-name="Table Cell">
      <Paragraph6 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[17.992px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[20.84%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.4938 11.994">
            <path d={svgPaths.p1bb1d200} id="Vector" stroke="var(--stroke-0, #009689)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49937" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99747 5.99747">
            <path d={svgPaths.p29140580} id="Vector" stroke="var(--stroke-0, #009689)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49937" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[33.977px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7.992px] px-[7.992px] relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="h-[17.992px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.9937 14.9937">
            <path d={svgPaths.p33bbcdc0} id="Vector" stroke="var(--stroke-0, #009689)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49937" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.35%_8.35%_33.32%_33.32%]" data-name="Vector">
        <div className="absolute inset-[-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9952 11.9952">
            <path d={svgPaths.p337e2f00} id="Vector" stroke="var(--stroke-0, #009689)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49937" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[33.977px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7.992px] px-[7.992px] relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[17.992px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[45.83%_58.33%_29.17%_41.67%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-0.75px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.49937 5.99747">
            <path d="M0.749684 0.749684V5.24779" id="Vector" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49937" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[45.83%_41.67%_29.17%_58.33%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-0.75px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.49937 5.99747">
            <path d="M0.749684 0.749684V5.24779" id="Vector" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49937" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[8.33%] left-[20.83%] right-[20.83%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-6.25%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9949 13.4943">
            <path d={svgPaths.p2ade80c0} id="Vector" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49937" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[12.5%] right-[12.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-0.75px_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.9937 1.49937">
            <path d="M0.749684 0.749684H14.244" id="Vector" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49937" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[33.33%] right-[33.33%] top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.49684 4.49811">
            <path d={svgPaths.p2d0d5e00} id="Vector" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49937" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[33.977px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7.992px] px-[7.992px] relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex gap-[7.992px] h-[33.977px] items-center justify-center left-[24px] pr-[0.009px] top-[23.31px] w-[117.926px]" data-name="Container">
      <Button7 />
      <Button8 />
      <Button9 />
    </div>
  );
}

function TableCell9() {
  return (
    <div className="absolute h-[80.606px] left-[652.76px] top-0 w-[165.919px]" data-name="Table Cell">
      <Container12 />
    </div>
  );
}

function TableRow2() {
  return (
    <div className="absolute border-[#e2e8f0] border-b-[0.606px] border-solid h-[80.606px] left-0 top-[80.61px] w-[818.674px]" data-name="Table Row">
      <TableCell5 />
      <TableCell6 />
      <TableCell7 />
      <TableCell8 />
      <TableCell9 />
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-[#009689] relative rounded-[20336000px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] text-white">DB</p>
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="flex-[1_0_0] h-[48.011px] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24px] left-0 text-[#0f766e] text-[16px] top-[11px]">David Brown</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex gap-[11.998px] h-[48.011px] items-center left-[24px] top-[16.3px] w-[119.479px]" data-name="Container">
      <Container14 />
      <Paragraph7 />
    </div>
  );
}

function TableCell10() {
  return (
    <div className="absolute h-[80.606px] left-0 top-0 w-[167.472px]" data-name="Table Cell">
      <Container13 />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="absolute h-[24.006px] left-[24px] top-[28.3px] w-[170.748px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#45556c] text-[16px] top-[-1.79px]">david.brown@farm.com</p>
    </div>
  );
}

function TableCell11() {
  return (
    <div className="absolute h-[80.606px] left-[167.47px] top-0 w-[218.741px]" data-name="Table Cell">
      <Paragraph8 />
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute bg-[#f1f5f9] h-[47.973px] left-[24px] rounded-[4px] top-[16.32px] w-[83.485px]" data-name="Text">
      <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[40.5px] text-[#314158] text-[14px] text-center top-[2px] w-[67px] whitespace-pre-wrap">Không hoạt động</p>
    </div>
  );
}

function TableCell12() {
  return (
    <div className="absolute h-[80.606px] left-[386.21px] top-0 w-[131.477px]" data-name="Table Cell">
      <Text2 />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="absolute h-[24.006px] left-[24px] top-[28.3px] w-[87.074px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#45556c] text-[16px] top-[-1.79px]">10/01/2024</p>
    </div>
  );
}

function TableCell13() {
  return (
    <div className="absolute h-[80.606px] left-[517.69px] top-0 w-[135.066px]" data-name="Table Cell">
      <Paragraph9 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="h-[17.992px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[20.84%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.4938 11.994">
            <path d={svgPaths.p1bb1d200} id="Vector" stroke="var(--stroke-0, #009689)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49937" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99747 5.99747">
            <path d={svgPaths.p29140580} id="Vector" stroke="var(--stroke-0, #009689)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49937" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[33.977px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7.992px] px-[7.992px] relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="h-[17.992px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.9937 14.9937">
            <path d={svgPaths.p33bbcdc0} id="Vector" stroke="var(--stroke-0, #009689)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49937" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.35%_8.35%_33.32%_33.32%]" data-name="Vector">
        <div className="absolute inset-[-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9952 11.9952">
            <path d={svgPaths.p337e2f00} id="Vector" stroke="var(--stroke-0, #009689)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49937" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[33.977px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7.992px] px-[7.992px] relative size-full">
        <Icon9 />
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="h-[17.992px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[45.83%_58.33%_29.17%_41.67%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-0.75px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.49937 5.99747">
            <path d="M0.749684 0.749684V5.24779" id="Vector" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49937" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[45.83%_41.67%_29.17%_58.33%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-0.75px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.49937 5.99747">
            <path d="M0.749684 0.749684V5.24779" id="Vector" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49937" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[8.33%] left-[20.83%] right-[20.83%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-6.25%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9949 13.4943">
            <path d={svgPaths.p2ade80c0} id="Vector" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49937" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[12.5%] right-[12.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-0.75px_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.9937 1.49937">
            <path d="M0.749684 0.749684H14.244" id="Vector" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49937" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[33.33%] right-[33.33%] top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.49684 4.49811">
            <path d={svgPaths.p2d0d5e00} id="Vector" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49937" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[33.977px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7.992px] px-[7.992px] relative size-full">
        <Icon10 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex gap-[7.992px] h-[33.977px] items-center justify-center left-[24px] pr-[0.009px] top-[23.31px] w-[117.926px]" data-name="Container">
      <Button10 />
      <Button11 />
      <Button12 />
    </div>
  );
}

function TableCell14() {
  return (
    <div className="absolute h-[80.606px] left-[652.76px] top-0 w-[165.919px]" data-name="Table Cell">
      <Container15 />
    </div>
  );
}

function TableRow3() {
  return (
    <div className="absolute border-[#e2e8f0] border-b-[0.606px] border-solid h-[80.606px] left-0 top-[161.21px] w-[818.674px]" data-name="Table Row">
      <TableCell10 />
      <TableCell11 />
      <TableCell12 />
      <TableCell13 />
      <TableCell14 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="absolute h-[241.818px] left-0 top-[72.27px] w-[818.674px]" data-name="Table Body">
      <TableRow1 />
      <TableRow2 />
      <TableRow3 />
    </div>
  );
}

function Table() {
  return (
    <div className="h-[314.394px] relative shrink-0 w-full" data-name="Table">
      <TableHeader />
      <TableBody />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bg-white h-[315.606px] left-[24px] rounded-[10px] top-[206.36px] w-[819.886px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[0.606px] relative rounded-[inherit] size-full">
        <Table />
      </div>
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.606px] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function MainContent() {
  return (
    <div className="absolute h-[545.966px] left-0 top-[6px] w-[867.879px]" data-name="Main Content">
      <Container />
      <Container2 />
      <Container6 />
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-[#f8fafc] h-[537px] left-[240px] top-[-3px] w-[868px]" data-name="App">
      <MainContent />
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[23.996px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9962 23.9962">
        <g id="Icon">
          <path d={svgPaths.p1b901700} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99968" />
          <path d={svgPaths.p1792b900} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99968" />
        </g>
      </svg>
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon11 />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[18.002px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[18px] left-0 text-[18px] text-white top-[-1.03px]">ACMMS</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="content-stretch flex h-[15.994px] items-start opacity-80 relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#cbfbf1] text-[12px]">Quản trị hệ thống</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[33.996px] relative shrink-0 w-[94.555px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading />
        <Paragraph10 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[80px] relative shrink-0 w-[255.994px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(0,150,137,0.3)] border-b-[0.606px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.998px] items-center pb-[0.606px] pl-[23.996px] relative size-full">
        <Container18 />
        <Container19 />
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1fc96a00} id="Vector" stroke="var(--stroke-0, #CBFBF1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p33089d00} id="Vector_2" stroke="var(--stroke-0, #CBFBF1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p49cfa80} id="Vector_3" stroke="var(--stroke-0, #CBFBF1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1cfbf300} id="Vector_4" stroke="var(--stroke-0, #CBFBF1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[19.991px] relative shrink-0 w-[68.627px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#cbfbf1] text-[14px]">Tổng quan</p>
      </div>
    </div>
  );
}

function MenuItem() {
  return (
    <div className="h-[43.996px] relative shrink-0 w-full" data-name="MenuItem">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-l-[3.636px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[11.998px] items-center pl-[19.63px] relative size-full">
          <Icon12 />
          <Text3 />
        </div>
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_23_1460)" id="Icon">
          <path d={svgPaths.p18110900} id="Vector" stroke="var(--stroke-0, #CBFBF1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 15H9.16667" id="Vector_2" stroke="var(--stroke-0, #CBFBF1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1f8d8100} id="Vector_3" stroke="var(--stroke-0, #CBFBF1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1b8aa600} id="Vector_4" stroke="var(--stroke-0, #CBFBF1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M3.33333 9.16667V3.33333" id="Vector_5" stroke="var(--stroke-0, #CBFBF1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M5.83333 12.5H5.84167" id="Vector_6" stroke="var(--stroke-0, #CBFBF1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M6.66667 8.41667V3.33333" id="Vector_7" stroke="var(--stroke-0, #CBFBF1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p14cd5800} id="Vector_8" stroke="var(--stroke-0, #CBFBF1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p12084270} id="Vector_9" stroke="var(--stroke-0, #CBFBF1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_23_1460">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[19.991px] relative shrink-0 w-[60.767px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#cbfbf1] text-[14px] whitespace-pre-wrap">Nông trại</p>
      </div>
    </div>
  );
}

function MenuItem1() {
  return (
    <div className="h-[43.996px] relative shrink-0 w-full" data-name="MenuItem">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-l-[3.636px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[11.998px] items-center pl-[19.63px] relative size-full">
          <Icon13 />
          <Text4 />
        </div>
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_23_1455)" id="Icon">
          <path d={svgPaths.p23f63f00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p60ae280} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3a8e0680} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_23_1455">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[19.991px] relative shrink-0 w-[47.538px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-white">Mùa vụ</p>
      </div>
    </div>
  );
}

function MenuItem2() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] h-[43.996px] relative shrink-0 w-full" data-name="MenuItem">
      <div aria-hidden="true" className="absolute border-l-[3.636px] border-solid border-white inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[11.998px] items-center pl-[19.63px] relative size-full">
          <Icon14 />
          <Text5 />
        </div>
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_23_1449)" id="Icon">
          <path d={svgPaths.p26ddc800} id="Vector" stroke="var(--stroke-0, #CBFBF1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1b144480} id="Vector_2" stroke="var(--stroke-0, #CBFBF1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_23_1449">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[19.991px] relative shrink-0 w-[49.602px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#cbfbf1] text-[14px]">Khu đất</p>
      </div>
    </div>
  );
}

function MenuItem3() {
  return (
    <div className="h-[43.996px] relative shrink-0 w-full" data-name="MenuItem">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-l-[3.636px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[11.998px] items-center pl-[19.63px] relative size-full">
          <Icon15 />
          <Text6 />
        </div>
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1e9e2f00} id="Vector" stroke="var(--stroke-0, #CBFBF1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pf657100} id="Vector_2" stroke="var(--stroke-0, #CBFBF1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M4.16667 17.5H15.8333" id="Vector_3" stroke="var(--stroke-0, #CBFBF1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[19.991px] relative shrink-0 w-[62.178px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#cbfbf1] text-[14px]">Cây trồng</p>
      </div>
    </div>
  );
}

function MenuItem4() {
  return (
    <div className="h-[43.996px] relative shrink-0 w-full" data-name="MenuItem">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-l-[3.636px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[11.998px] items-center pl-[19.63px] relative size-full">
          <Icon16 />
          <Text7 />
        </div>
      </div>
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_23_1443)" id="Icon">
          <path d={svgPaths.p34aa4800} id="Vector" stroke="var(--stroke-0, #CBFBF1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p18406864} id="Vector_2" stroke="var(--stroke-0, #CBFBF1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2241fff0} id="Vector_3" stroke="var(--stroke-0, #CBFBF1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2c4f400} id="Vector_4" stroke="var(--stroke-0, #CBFBF1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_23_1443">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[19.991px] relative shrink-0 w-[52.992px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#cbfbf1] text-[14px]">Nhân sự</p>
      </div>
    </div>
  );
}

function MenuItem5() {
  return (
    <div className="h-[43.996px] relative shrink-0 w-full" data-name="MenuItem">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-l-[3.636px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[11.998px] items-center pl-[19.63px] relative size-full">
          <Icon17 />
          <Text8 />
        </div>
      </div>
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_23_1431)" id="Icon">
          <path d={svgPaths.pe6b10c0} id="Vector" stroke="var(--stroke-0, #CBFBF1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p4c21d00} id="Vector_2" stroke="var(--stroke-0, #CBFBF1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_23_1431">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[19.991px] relative shrink-0 w-[62.292px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#cbfbf1] text-[14px]">Công việc</p>
      </div>
    </div>
  );
}

function MenuItem6() {
  return (
    <div className="h-[43.996px] relative shrink-0 w-full" data-name="MenuItem">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-l-[3.636px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[11.998px] items-center pl-[19.63px] relative size-full">
          <Icon18 />
          <Text9 />
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[255.994px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.996px] items-start overflow-clip pr-[14.545px] pt-[23.996px] relative rounded-[inherit] size-full">
        <MenuItem />
        <MenuItem1 />
        <MenuItem2 />
        <MenuItem3 />
        <MenuItem4 />
        <MenuItem5 />
        <MenuItem6 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute bg-[#96f7e4] content-stretch flex items-center justify-center left-[12px] rounded-[20336000px] size-[40px] top-[12px]" data-name="Container">
      <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#005f5a] text-[16px]">NA</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="content-stretch flex h-[19.991px] items-start overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[14px] text-white whitespace-pre-wrap">Nguyễn Văn A</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="content-stretch flex h-[15.994px] items-start overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#96f7e4] text-[12px] whitespace-pre-wrap">Chủ nông trại</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute content-stretch flex flex-col h-[35.985px] items-start left-[64px] top-[14.01px] w-[116.013px]" data-name="Container">
      <Paragraph11 />
      <Paragraph12 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_23_1481)" id="Icon">
          <path d={svgPaths.p3b7be120} id="Vector" stroke="var(--stroke-0, #CBFBF1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2817c200} id="Vector_2" stroke="var(--stroke-0, #CBFBF1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_23_1481">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container26() {
  return <div className="absolute bg-[#fb2c36] border-[#009689] border-[1.818px] border-solid left-[14px] rounded-[20336000px] size-[10px] top-[-4px]" data-name="Container" />;
}

function Container25() {
  return (
    <div className="absolute left-[192.01px] size-[20px] top-[22px]" data-name="Container">
      <Icon19 />
      <Container26 />
    </div>
  );
}

function Container22() {
  return (
    <div className="bg-[rgba(0,95,90,0.3)] h-[63.996px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <Container23 />
      <Container24 />
      <Container25 />
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[96.591px] relative shrink-0 w-[255.994px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(0,150,137,0.3)] border-solid border-t-[0.606px] inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16.6px] px-[15.994px] relative size-full">
        <Container22 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute bg-[#009689] content-stretch flex flex-col h-[584px] items-start left-0 shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)] top-[-3px] w-[241px]" data-name="Container">
      <Container17 />
      <Container20 />
      <Container21 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[16.503px] relative shrink-0 w-[105.701px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[16.508px] left-0 text-[#101828] text-[11.791px] top-[-1.41px]">Chỉnh sửa thông tin</p>
      </div>
    </div>
  );
}

function Icon20() {
  return (
    <div className="h-[14.147px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.25249 8.25249">
            <path d={svgPaths.pe047c20} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.17893" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.25249 8.25249">
            <path d={svgPaths.p201c2f80} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.17893" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="relative shrink-0 size-[14.147px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon20 />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[45.155px] relative shrink-0 w-[264.117px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b-[0.357px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[0.357px] px-[14.147px] relative size-full">
        <Heading2 />
        <Button13 />
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="absolute content-stretch flex h-[11.077px] items-start left-0 top-[1.79px] w-[36.032px]" data-name="Label">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[11.791px] relative shrink-0 text-[#364153] text-[8.254px]">Họ và tên</p>
    </div>
  );
}

function TextInput1() {
  return (
    <div className="absolute h-[24.28px] left-0 rounded-[5.896px] top-[14.15px] w-[227.247px]" data-name="Text Input">
      <div className="content-stretch flex items-center overflow-clip px-[9.433px] py-[4.716px] relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[14.149px] relative shrink-0 text-[#0a0a0a] text-[9.433px]">Maria Garcia</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.357px] border-solid inset-0 pointer-events-none rounded-[5.896px]" />
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[38.433px] relative shrink-0 w-full" data-name="Container">
      <Label />
      <TextInput1 />
    </div>
  );
}

function Label1() {
  return (
    <div className="absolute content-stretch flex h-[11.077px] items-start left-0 top-[1.79px] w-[20.205px]" data-name="Label">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[11.791px] relative shrink-0 text-[#364153] text-[8.254px]">Email</p>
    </div>
  );
}

function EmailInput() {
  return (
    <div className="absolute h-[24.28px] left-0 rounded-[5.896px] top-[14.15px] w-[227.247px]" data-name="Email Input">
      <div className="content-stretch flex items-center overflow-clip px-[9.433px] py-[4.716px] relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[14.149px] relative shrink-0 text-[#0a0a0a] text-[9.433px]">maria.garcia@farm.com</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.357px] border-solid inset-0 pointer-events-none rounded-[5.896px]" />
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[38.433px] relative shrink-0 w-full" data-name="Container">
      <Label1 />
      <EmailInput />
    </div>
  );
}

function Label2() {
  return (
    <div className="absolute content-stretch flex h-[11.077px] items-start left-0 top-[1.79px] w-[20.205px]" data-name="Label">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[11.791px] relative shrink-0 text-[#364153] text-[8.254px]">Số Điện Thoại</p>
    </div>
  );
}

function EmailInput1() {
  return (
    <div className="absolute h-[24.28px] left-0 rounded-[5.896px] top-[14.15px] w-[227.247px]" data-name="Email Input">
      <div className="content-stretch flex items-center overflow-clip px-[9.433px] py-[4.716px] relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[14.149px] relative shrink-0 text-[#0a0a0a] text-[9.433px]">0909993399</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.357px] border-solid inset-0 pointer-events-none rounded-[5.896px]" />
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[38.433px] relative shrink-0 w-full" data-name="Container">
      <Label2 />
      <EmailInput1 />
    </div>
  );
}

function Label3() {
  return (
    <div className="absolute content-stretch flex h-[11.077px] items-start left-0 top-[1.79px] w-[24.319px]" data-name="Label">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[11.791px] relative shrink-0 text-[#364153] text-[8.254px]">Vai trò</p>
    </div>
  );
}

function Option() {
  return (
    <div className="absolute left-[-209.02px] size-0 top-[-184.22px]" data-name="Option">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[normal] left-0 text-[#0a0a0a] text-[9.433px] top-0 w-0 whitespace-pre-wrap">Công nhân</p>
    </div>
  );
}

function Option1() {
  return (
    <div className="absolute left-[-209.02px] size-0 top-[-184.22px]" data-name="Option">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[normal] left-0 text-[#0a0a0a] text-[9.433px] top-0 w-0 whitespace-pre-wrap">Quản lý</p>
    </div>
  );
}

function Option2() {
  return (
    <div className="absolute left-[-209.02px] size-0 top-[-184.22px]" data-name="Option">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[normal] left-0 text-[#0a0a0a] text-[9.433px] top-0 w-0 whitespace-pre-wrap">Kỹ thuật viên</p>
    </div>
  );
}

function Dropdown() {
  return (
    <div className="absolute bg-white border-[#e5e7eb] border-[0.357px] border-solid h-[23.359px] left-0 rounded-[5.896px] top-[14.15px] w-[227.247px]" data-name="Dropdown">
      <Option />
      <Option1 />
      <Option2 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12.5px] text-[12px] text-black top-[0.64px]">Người làm nông</p>
      <div className="absolute left-[209.5px] size-[16.722px] top-[3.46px]" data-name="image 14">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage14} />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[37.512px] relative shrink-0 w-full" data-name="Container">
      <Label3 />
      <Dropdown />
    </div>
  );
}

function Label4() {
  return (
    <div className="absolute content-stretch flex h-[11.077px] items-start left-0 top-[1.79px] w-[37.556px]" data-name="Label">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[11.791px] relative shrink-0 text-[#364153] text-[8.254px]">Trạng thái</p>
    </div>
  );
}

function Text11() {
  return <div className="absolute bg-[#008236] left-0 rounded-[12170003px] size-[4.783px] top-[3.59px]" data-name="Text" />;
}

function Text10() {
  return (
    <div className="absolute h-[11.963px] left-[9.57px] top-[3.15px] w-[49.343px]" data-name="Text">
      <Text11 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[11.969px] left-[9.57px] text-[#008236] text-[8.378px] top-[-1.2px]">Hoạt động</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute bg-[#f9fafb] border-[#e5e7eb] border-[0.363px] border-solid h-[18.991px] left-[-0.15px] rounded-[5.984px] top-[19.03px] w-[90px]" data-name="Container">
      <Text10 />
      <div className="absolute left-[70.64px] size-[16.722px] top-[0.64px]" data-name="image 14">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage14} />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute h-[38.444px] left-0 top-0 w-[108.906px]" data-name="Container">
      <Label4 />
      <Container36 />
    </div>
  );
}

function Label5() {
  return (
    <div className="absolute content-stretch flex h-[11.077px] items-start left-0 top-[1.79px] w-[54.69px]" data-name="Label">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[11.791px] relative shrink-0 text-[#364153] text-[8.254px]">Ngày gia nhập</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute bg-[#f9fafb] border-[#e5e7eb] border-[0.357px] border-solid h-[24.291px] left-0 rounded-[5.896px] top-[14.15px] w-[108.912px]" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[14.149px] left-[9.43px] text-[#4a5565] text-[9.433px] top-[3.66px]">15/03/2024</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute h-[38.444px] left-[118.34px] top-0 w-[108.912px]" data-name="Container">
      <Label5 />
      <Container38 />
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[38.444px] relative shrink-0 w-full" data-name="Container">
      <Container35 />
      <Container37 />
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[269px] relative shrink-0 w-[264px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[9.43px] items-start overflow-clip pl-[14.147px] pr-[22.722px] pt-[14.147px] relative rounded-[inherit] size-full">
        <Container30 />
        <Container31 />
        <Container32 />
        <Container33 />
        <Container34 />
      </div>
    </div>
  );
}

function Button14() {
  return (
    <div className="h-[21.21px] relative rounded-[5.896px] shrink-0 w-[46.115px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[11.791px] left-[23.52px] text-[#364153] text-[8.254px] text-center top-[3.53px]">Hủy bỏ</p>
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="bg-[#009689] h-[21.21px] relative rounded-[5.896px] shadow-[0px_0.59px_1.769px_0px_rgba(0,0,0,0.1),0px_0.59px_1.179px_0px_rgba(0,0,0,0.1)] shrink-0 w-[65.795px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[11.791px] left-[33.02px] text-[8.254px] text-center text-white top-[3.53px]">Lưu thay đổi</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="bg-[#f9fafb] h-[49.861px] relative shrink-0 w-[264.117px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-solid border-t-[0.357px] inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.074px] items-start justify-end pr-[14.147px] pt-[14.504px] relative size-full">
        <Button14 />
        <Button15 />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[364px] items-start left-[302px] overflow-clip rounded-[8.254px] shadow-[0px_11.791px_14.739px_-2.948px_rgba(0,0,0,0.1),0px_4.716px_5.896px_-3.537px_rgba(0,0,0,0.1)] top-[112px] w-[264px]" data-name="Container">
      <Container28 />
      <Container29 />
      <Container39 />
    </div>
  );
}

function ViewWorkerModal() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.5)] h-[587px] left-[241px] top-[-3px] w-[867px]" data-name="ViewWorkerModal">
      <Container27 />
    </div>
  );
}

export default function WorkerEdit() {
  return (
    <div className="bg-white relative size-full" data-name="Worker - Edit">
      <App />
      <Container16 />
      <ViewWorkerModal />
    </div>
  );
}