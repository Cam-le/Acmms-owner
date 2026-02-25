import svgPaths from "./svg-gg64x5lm9w";

function Heading1() {
  return (
    <div className="h-[31.973px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[31.984px] left-0 text-[#115e59] text-[23.988px] top-[-2.6px]">Quản lý nhân viên</p>
    </div>
  );
}

function Paragraph() {
  return <div className="h-[23.994px] shrink-0 w-full" data-name="Paragraph" />;
}

function Container1() {
  return (
    <div className="h-[59.961px] relative shrink-0 w-[304.633px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.994px] items-start relative size-full">
        <Heading1 />
        <Paragraph />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[15.99px] size-[15.986px] top-[11.99px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9865 15.9865">
        <g id="Icon">
          <path d="M3.3305 7.9931H12.6559" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33221" />
          <path d="M7.99319 3.33016V12.6556" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33221" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#009689] h-[39.971px] relative rounded-[9.995px] shrink-0 w-[174.791px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon />
        <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[98.96px] text-[16px] text-center text-white top-[6.2px]">Thêm Nhân Viên</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex h-[60px] items-start justify-between left-[24px] top-[23.63px] w-[948px]" data-name="Container">
      <Container1 />
      <Button />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#009689] h-[39.971px] relative rounded-[9.995px] shrink-0 w-[73.818px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[23.988px] left-[37.49px] text-[15.992px] text-center text-white top-[6.2px]">Tất cả</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#f1f5f9] h-[39.971px] relative rounded-[9.995px] shrink-0 w-[107.892px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[23.988px] left-[53.99px] text-[#314158] text-[15.992px] text-center top-[6.2px]">Hoạt động</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#f1f5f9] h-[39.971px] relative rounded-[9.995px] shrink-0 w-[156.136px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[23.988px] left-[77.99px] text-[#314158] text-[15.992px] text-center top-[6.2px]">Không hoạt động</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex gap-[7.988px] h-[39.971px] items-start left-[549.41px] top-[0.41px] w-[353.823px]" data-name="Container">
      <Button1 />
      <Button2 />
      <Button3 />
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute h-[41.164px] left-0 rounded-[9.995px] top-0 w-[420.485px]" data-name="Text Input">
      <div className="content-stretch flex items-center overflow-clip pl-[39.98px] pr-[15.992px] py-[7.996px] relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[15.992px] text-[rgba(10,10,10,0.5)]">Tìm kiếm theo tên, sdt hoặc vai trò...</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#cad5e2] border-[0.606px] border-solid inset-0 pointer-events-none rounded-[9.995px]" />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[11.99px] size-[19.99px] top-[10.58px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9902 19.9902">
        <g id="Icon">
          <path d={svgPaths.p168775a0} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66585" />
          <path d={svgPaths.p56ef380} id="Vector_2" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66585" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute h-[41.164px] left-0 top-0 w-[420.485px]" data-name="Container">
      <TextInput />
      <Icon1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[41.164px] relative shrink-0 w-full" data-name="Container">
      <Container4 />
      <Container5 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[75px] items-start left-[24px] pb-[0.606px] pt-[16.592px] px-[16.592px] rounded-[9.995px] top-[107.63px] w-[949px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.606px] border-solid inset-0 pointer-events-none rounded-[9.995px] shadow-[0px_1px_2.999px_0px_rgba(0,0,0,0.1),0px_1px_1.999px_0px_rgba(0,0,0,0.1)]" />
      <Container3 />
    </div>
  );
}

function HeaderCell() {
  return (
    <div className="h-[72.237px] relative shrink-0 w-[167.39px]" data-name="Header Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[19.99px] left-[87.96px] text-[#62748e] text-[13.993px] top-[23.97px]">Họ Tên</p>
    </div>
  );
}

function HeaderCell1() {
  return (
    <div className="h-[72.237px] relative shrink-0 w-[218.633px]" data-name="Header Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[19.99px] left-[85.96px] text-[#62748e] text-[13.993px] top-[23.97px]">Email</p>
    </div>
  );
}

function HeaderCell2() {
  return (
    <div className="h-[72.237px] relative shrink-0 w-[131.413px]" data-name="Header Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[19.99px] left-[23.98px] text-[#62748e] text-[13.993px] top-[23.97px]">Số điện thoại</p>
    </div>
  );
}

function HeaderCell3() {
  return (
    <div className="h-[72.237px] relative shrink-0 w-[131.413px]" data-name="Header Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[19.99px] left-[46px] text-[#62748e] text-[13.993px] top-[23.97px]">Vai trò</p>
    </div>
  );
}

function HeaderCell4() {
  return (
    <div className="h-[72.237px] relative shrink-0 w-[135px]" data-name="Header Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[19.99px] left-[23.98px] text-[#62748e] text-[13.993px] top-[20.99px]">Trạng thái</p>
    </div>
  );
}

function HeaderCell5() {
  return (
    <div className="h-[72.237px] relative shrink-0 w-[165.837px]" data-name="Header Cell">
      <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[19.99px] left-[83.04px] text-[#62748e] text-[13.993px] text-center top-[23.97px]">Thao Tác</p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="absolute bg-[#f8fafc] content-stretch flex items-center left-0 top-0" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b-[0.606px] border-solid inset-0 pointer-events-none" />
      <HeaderCell />
      <HeaderCell1 />
      <HeaderCell2 />
      <HeaderCell3 />
      <HeaderCell4 />
      <HeaderCell5 />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="absolute h-[72.237px] left-0 top-0 w-[818.274px]" data-name="Table Header">
      <TableRow />
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[#009689] relative rounded-[20326052px] shrink-0 size-[39.98px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[23.988px] relative shrink-0 text-[15.992px] text-white">MG</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="flex-[1_0_0] h-[47.988px] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[23.988px] left-0 text-[#0f766e] text-[15.992px] top-[9px]">Maria Garcia</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex gap-[11.992px] h-[47.988px] items-center left-[23.98px] top-[16.29px] w-[119.421px]" data-name="Container">
      <Container8 />
      <Paragraph1 />
    </div>
  );
}

function TableCell() {
  return (
    <div className="h-[80.567px] relative shrink-0 w-[167.39px]" data-name="Table Cell">
      <Container7 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[23.994px] left-[23.98px] top-[28.28px] w-[170.665px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[23.988px] left-0 text-[#45556c] text-[15.992px] top-[-1.79px]">maria.garcia@farm.com</p>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="h-[80.567px] relative shrink-0 w-[218.633px]" data-name="Table Cell">
      <Paragraph2 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[23.994px] left-[23.98px] top-[28.28px] w-[87.031px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[23.988px] left-0 text-[#45556c] text-[15.992px] top-[-1.79px]">0909993399</p>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="h-[80.567px] relative shrink-0 w-[135px]" data-name="Table Cell">
      <Paragraph3 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[23.994px] left-[23.98px] top-[28.28px] w-[87.031px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[23.988px] left-0 text-[#45556c] text-[15.992px] top-[-1.79px]">Người làm nông</p>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="h-[80.567px] relative shrink-0 w-[135px]" data-name="Table Cell">
      <Paragraph4 />
    </div>
  );
}

function Text() {
  return (
    <div className="absolute bg-[#dcfce7] h-[47.95px] left-[23.98px] rounded-[3.998px] top-[16.31px] w-[83.444px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[19.99px] left-[7.99px] text-[#008236] text-[13.993px] top-[10.99px]">Hoạt động</p>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="h-[80.567px] relative shrink-0 w-[131.413px]" data-name="Table Cell">
      <Text />
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[17.984px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[20.84%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.4857 11.9882">
            <path d={svgPaths.p12b5c500} id="Vector" stroke="var(--stroke-0, #009689)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49864" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99454 5.99454">
            <path d={svgPaths.p1ff18600} id="Vector" stroke="var(--stroke-0, #009689)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49864" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="relative rounded-[9.995px] shrink-0 size-[33.961px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7.988px] px-[7.989px] relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[17.984px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.9864 14.9864">
            <path d={svgPaths.p35f20600} id="Vector" stroke="var(--stroke-0, #009689)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49864" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.35%_8.35%_33.32%_33.32%]" data-name="Vector">
        <div className="absolute inset-[-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9893 11.9893">
            <path d={svgPaths.p15bb7080} id="Vector" stroke="var(--stroke-0, #009689)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49864" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="relative rounded-[9.995px] shrink-0 size-[33.961px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7.988px] px-[7.989px] relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[17.984px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[45.83%_58.33%_29.17%_41.67%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-0.75px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.49864 5.99454">
            <path d="M0.749318 0.749318V5.24522" id="Vector" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49864" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[45.83%_41.67%_29.17%_58.33%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-0.75px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.49864 5.99454">
            <path d="M0.749318 0.749318V5.24522" id="Vector" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49864" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[8.33%] left-[20.83%] right-[20.83%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-6.25%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9891 13.4877">
            <path d={svgPaths.p16bf6d80} id="Vector" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49864" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[12.5%] right-[12.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-0.75px_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.9864 1.49864">
            <path d="M0.749318 0.749318H14.237" id="Vector" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49864" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[33.33%] right-[33.33%] top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.49318 4.49591">
            <path d={svgPaths.p52077e4} id="Vector" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49864" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="relative rounded-[9.995px] shrink-0 size-[33.961px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7.988px] px-[7.989px] relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex gap-[7.988px] h-[33.961px] items-center justify-center left-[23.98px] pr-[0.009px] top-[23.3px] w-[117.868px]" data-name="Container">
      <Button4 />
      <Button5 />
      <Button6 />
    </div>
  );
}

function TableCell5() {
  return (
    <div className="h-[80.567px] relative shrink-0 w-[165.837px]" data-name="Table Cell">
      <Container9 />
    </div>
  );
}

function TableRow1() {
  return (
    <div className="absolute content-stretch flex items-center left-0 top-0" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b-[0.606px] border-solid inset-0 pointer-events-none" />
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
      <TableCell4 />
      <TableCell5 />
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[#009689] relative rounded-[20326052px] shrink-0 size-[39.98px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[23.988px] relative shrink-0 text-[15.992px] text-white">JW</p>
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="flex-[1_0_0] h-[47.988px] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[23.988px] left-0 text-[#0f766e] text-[15.992px] top-[10px]">James Wilson</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex gap-[11.992px] h-[47.988px] items-center left-[23.98px] top-[16.29px] w-[119.421px]" data-name="Container">
      <Container11 />
      <Paragraph5 />
    </div>
  );
}

function TableCell6() {
  return (
    <div className="h-[80.567px] relative shrink-0 w-[167.39px]" data-name="Table Cell">
      <Container10 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute h-[23.994px] left-[23.98px] top-[28.28px] w-[170.665px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[23.988px] left-0 text-[#45556c] text-[15.992px] top-[-1.79px]">james.wilson@farm.com</p>
    </div>
  );
}

function TableCell7() {
  return (
    <div className="h-[80.567px] relative shrink-0 w-[218.633px]" data-name="Table Cell">
      <Paragraph6 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute h-[23.994px] left-[23.98px] top-[28.28px] w-[87.031px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[23.988px] left-0 text-[#45556c] text-[15.992px] top-[-1.79px]">0909883399</p>
    </div>
  );
}

function TableCell8() {
  return (
    <div className="h-[80.567px] relative shrink-0 w-[135px]" data-name="Table Cell">
      <Paragraph7 />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="absolute h-[23.994px] left-[23.98px] top-[28.28px] w-[87.031px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[23.988px] left-0 text-[#45556c] text-[15.992px] top-[-1.79px]">Chuyên gia</p>
    </div>
  );
}

function TableCell9() {
  return (
    <div className="h-[80.567px] relative shrink-0 w-[135px]" data-name="Table Cell">
      <Paragraph8 />
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute bg-[#dcfce7] h-[47.95px] left-[23.98px] rounded-[3.998px] top-[16.31px] w-[83.444px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[19.99px] left-[7.99px] text-[#008236] text-[13.993px] top-[10.99px]">Hoạt động</p>
    </div>
  );
}

function TableCell10() {
  return (
    <div className="h-[80.567px] relative shrink-0 w-[131.413px]" data-name="Table Cell">
      <Text1 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[17.984px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[20.84%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.4857 11.9882">
            <path d={svgPaths.p12b5c500} id="Vector" stroke="var(--stroke-0, #009689)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49864" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99454 5.99454">
            <path d={svgPaths.p1ff18600} id="Vector" stroke="var(--stroke-0, #009689)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49864" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="relative rounded-[9.995px] shrink-0 size-[33.961px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7.989px] px-[7.989px] relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="h-[17.984px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.9864 14.9864">
            <path d={svgPaths.p35f20600} id="Vector" stroke="var(--stroke-0, #009689)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49864" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.35%_8.35%_33.32%_33.32%]" data-name="Vector">
        <div className="absolute inset-[-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9893 11.9893">
            <path d={svgPaths.p15bb7080} id="Vector" stroke="var(--stroke-0, #009689)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49864" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="relative rounded-[9.995px] shrink-0 size-[33.961px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7.989px] px-[7.989px] relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[17.984px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[45.83%_58.33%_29.17%_41.67%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-0.75px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.49864 5.99454">
            <path d="M0.749318 0.749318V5.24522" id="Vector" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49864" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[45.83%_41.67%_29.17%_58.33%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-0.75px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.49864 5.99454">
            <path d="M0.749318 0.749318V5.24522" id="Vector" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49864" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[8.33%] left-[20.83%] right-[20.83%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-6.25%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9891 13.4877">
            <path d={svgPaths.p16bf6d80} id="Vector" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49864" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[12.5%] right-[12.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-0.75px_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.9864 1.49864">
            <path d="M0.749318 0.749318H14.237" id="Vector" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49864" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[33.33%] right-[33.33%] top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.49318 4.49591">
            <path d={svgPaths.p52077e4} id="Vector" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49864" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="relative rounded-[9.995px] shrink-0 size-[33.961px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7.989px] px-[7.989px] relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex gap-[7.988px] h-[33.961px] items-center justify-center left-[23.98px] pr-[0.009px] top-[23.3px] w-[117.868px]" data-name="Container">
      <Button7 />
      <Button8 />
      <Button9 />
    </div>
  );
}

function TableCell11() {
  return (
    <div className="h-[80.567px] relative shrink-0 w-[165.837px]" data-name="Table Cell">
      <Container12 />
    </div>
  );
}

function TableRow2() {
  return (
    <div className="absolute content-stretch flex items-start left-[0.39px] top-[80.16px] w-[947px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b-[0.606px] border-solid inset-0 pointer-events-none" />
      <TableCell6 />
      <TableCell7 />
      <TableCell8 />
      <TableCell9 />
      <TableCell10 />
      <TableCell11 />
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-[#009689] relative rounded-[20326052px] shrink-0 size-[39.98px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[23.988px] relative shrink-0 text-[15.992px] text-white">DB</p>
      </div>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="flex-[1_0_0] h-[47.988px] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[23.988px] left-0 text-[#0f766e] text-[15.992px] top-[10.99px]">David Brown</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex gap-[11.992px] h-[47.988px] items-center left-[23.98px] top-[16.29px] w-[119.421px]" data-name="Container">
      <Container14 />
      <Paragraph9 />
    </div>
  );
}

function TableCell12() {
  return (
    <div className="h-[80.567px] relative shrink-0 w-[167.39px]" data-name="Table Cell">
      <Container13 />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="absolute h-[23.994px] left-[23.98px] top-[28.28px] w-[170.665px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[23.988px] left-0 text-[#45556c] text-[15.992px] top-[-1.79px]">david.brown@farm.com</p>
    </div>
  );
}

function TableCell13() {
  return (
    <div className="h-[80.567px] relative shrink-0 w-[218.633px]" data-name="Table Cell">
      <Paragraph10 />
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="absolute h-[23.994px] left-[23.98px] top-[28.28px] w-[87.031px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[23.988px] left-0 text-[#45556c] text-[15.992px] top-[-1.79px]">0909773399</p>
    </div>
  );
}

function TableCell14() {
  return (
    <div className="h-[80.567px] relative shrink-0 w-[135px]" data-name="Table Cell">
      <Paragraph11 />
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="absolute h-[23.994px] left-[23.98px] top-[28.28px] w-[87.031px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[23.988px] left-0 text-[#45556c] text-[15.992px] top-[-1.79px]">Người làm nông</p>
    </div>
  );
}

function TableCell15() {
  return (
    <div className="h-[80.567px] relative shrink-0 w-[135px]" data-name="Table Cell">
      <Paragraph12 />
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute bg-[#f1f5f9] h-[47.95px] left-[23.98px] rounded-[3.998px] top-[16.31px] w-[83.444px]" data-name="Text">
      <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[19.99px] left-[40.48px] text-[#314158] text-[13.993px] text-center top-[2px] w-[66.967px] whitespace-pre-wrap">Không hoạt động</p>
    </div>
  );
}

function TableCell16() {
  return (
    <div className="h-[80.567px] relative shrink-0 w-[131.413px]" data-name="Table Cell">
      <Text2 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="h-[17.984px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[20.84%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.4857 11.9882">
            <path d={svgPaths.p12b5c500} id="Vector" stroke="var(--stroke-0, #009689)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49864" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99454 5.99454">
            <path d={svgPaths.p1ff18600} id="Vector" stroke="var(--stroke-0, #009689)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49864" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="relative rounded-[9.995px] shrink-0 size-[33.961px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7.989px] px-[7.989px] relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="h-[17.984px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.9864 14.9864">
            <path d={svgPaths.p35f20600} id="Vector" stroke="var(--stroke-0, #009689)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49864" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.35%_8.35%_33.32%_33.32%]" data-name="Vector">
        <div className="absolute inset-[-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9893 11.9893">
            <path d={svgPaths.p15bb7080} id="Vector" stroke="var(--stroke-0, #009689)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49864" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="relative rounded-[9.995px] shrink-0 size-[33.961px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7.989px] px-[7.989px] relative size-full">
        <Icon9 />
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="h-[17.984px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[45.83%_58.33%_29.17%_41.67%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-0.75px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.49864 5.99454">
            <path d="M0.749318 0.749318V5.24522" id="Vector" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49864" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[45.83%_41.67%_29.17%_58.33%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-0.75px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.49864 5.99454">
            <path d="M0.749318 0.749318V5.24522" id="Vector" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49864" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[8.34%] left-[20.83%] right-[20.83%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-6.25%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9891 13.4877">
            <path d={svgPaths.p16bf6d80} id="Vector" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49864" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[12.5%] right-[12.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-0.75px_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.9864 1.49864">
            <path d="M0.749318 0.749318H14.237" id="Vector" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49864" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[33.33%] right-[33.33%] top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.49318 4.49591">
            <path d={svgPaths.p52077e4} id="Vector" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49864" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="relative rounded-[9.995px] shrink-0 size-[33.961px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7.989px] px-[7.989px] relative size-full">
        <Icon10 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex gap-[7.988px] h-[33.961px] items-center justify-center left-[23.98px] pr-[0.009px] top-[23.3px] w-[117.868px]" data-name="Container">
      <Button10 />
      <Button11 />
      <Button12 />
    </div>
  );
}

function TableCell17() {
  return (
    <div className="h-[80.567px] relative shrink-0 w-[165.837px]" data-name="Table Cell">
      <Container15 />
    </div>
  );
}

function TableRow3() {
  return (
    <div className="absolute content-stretch flex items-center left-[0.39px] top-[161.16px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b-[0.606px] border-solid inset-0 pointer-events-none" />
      <TableCell12 />
      <TableCell13 />
      <TableCell14 />
      <TableCell15 />
      <TableCell16 />
      <TableCell17 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="absolute h-[241.7px] left-0 top-[72.24px] w-[818.274px]" data-name="Table Body">
      <TableRow1 />
      <TableRow2 />
      <TableRow3 />
    </div>
  );
}

function Table() {
  return (
    <div className="h-[314.24px] relative shrink-0 w-full" data-name="Table">
      <TableHeader />
      <TableBody />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bg-white h-[315px] left-[24px] rounded-[9.995px] top-[206.63px] w-[950px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[0.606px] relative rounded-[inherit] size-full">
        <Table />
      </div>
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.606px] border-solid inset-0 pointer-events-none rounded-[9.995px] shadow-[0px_1px_2.999px_0px_rgba(0,0,0,0.1),0px_1px_1.999px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function MainContent() {
  return (
    <div className="absolute h-[545px] left-0 top-[6px] w-[998px]" data-name="Main Content">
      <Container />
      <Container2 />
      <Container6 />
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-[#f8fafc] h-[536px] left-[238px] top-[-1px] w-[1008px]" data-name="App">
      <MainContent />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[20.288px] relative shrink-0 w-[115.368px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[20.294px] left-0 text-[#101828] text-[14.496px] top-[-1.74px]">Chi tiết nhân viên</p>
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="h-[17.392px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.1454 10.1454">
            <path d={svgPaths.p90deb00} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.44934" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.1454 10.1454">
            <path d={svgPaths.p351051e0} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.44934" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="relative shrink-0 size-[17.392px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon11 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[55.512px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b-[0.439px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[0.439px] px-[17.392px] relative size-full">
          <Heading2 />
          <Button13 />
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-[#009689] relative rounded-[14739226px] shadow-[0px_2.899px_4.349px_0px_rgba(0,0,0,0.1),0px_1.45px_2.899px_0px_rgba(0,0,0,0.1)] shrink-0 size-[69.575px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[26.092px] relative shrink-0 text-[21.744px] text-white">MG</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex h-[69.575px] items-start justify-center pr-[0.007px] relative shrink-0 w-[289.914px]" data-name="Container">
      <Container20 />
    </div>
  );
}

function Label() {
  return (
    <div className="absolute content-stretch flex h-[13.617px] items-start left-0 top-[2.2px] w-[44.297px]" data-name="Label">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[14.496px] relative shrink-0 text-[#364153] text-[10.147px]">Họ và tên</p>
    </div>
  );
}

function TextInput1() {
  return (
    <div className="absolute bg-[#f9fafb] h-[29.849px] left-0 rounded-[7.248px] top-[17.4px] w-[289.914px]" data-name="Text Input">
      <div className="content-stretch flex items-center overflow-clip px-[11.597px] py-[5.798px] relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[17.395px] relative shrink-0 text-[#4a5565] text-[11.597px]">Maria Garcia</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.439px] border-solid inset-0 pointer-events-none rounded-[7.248px]" />
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[47.248px] relative shrink-0 w-[289.914px]" data-name="Container">
      <Label />
      <TextInput1 />
    </div>
  );
}

function Label1() {
  return (
    <div className="absolute content-stretch flex h-[13.617px] items-start left-0 top-[2.2px] w-[24.839px]" data-name="Label">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[14.496px] relative shrink-0 text-[#364153] text-[10.147px]">Email</p>
    </div>
  );
}

function EmailInput() {
  return (
    <div className="absolute bg-[#f9fafb] h-[29.849px] left-0 rounded-[7.248px] top-[17.4px] w-[289.914px]" data-name="Email Input">
      <div className="content-stretch flex items-center overflow-clip px-[11.597px] py-[5.798px] relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[17.395px] relative shrink-0 text-[#4a5565] text-[11.597px]">maria.garcia@farm.com</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.439px] border-solid inset-0 pointer-events-none rounded-[7.248px]" />
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[47.248px] relative shrink-0 w-[289.914px]" data-name="Container">
      <Label1 />
      <EmailInput />
    </div>
  );
}

function Label2() {
  return (
    <div className="absolute content-stretch flex h-[13.617px] items-start left-0 top-[2.2px] w-[24.839px]" data-name="Label">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[14.496px] relative shrink-0 text-[#364153] text-[10.147px]">Số Điện Thoại</p>
    </div>
  );
}

function EmailInput1() {
  return (
    <div className="absolute bg-[#f9fafb] h-[29.849px] left-0 rounded-[7.248px] top-[17.4px] w-[289.914px]" data-name="Email Input">
      <div className="content-stretch flex items-center overflow-clip px-[11.597px] py-[5.798px] relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[17.395px] relative shrink-0 text-[#4a5565] text-[11.597px]">0909993399</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.439px] border-solid inset-0 pointer-events-none rounded-[7.248px]" />
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[47.248px] relative shrink-0 w-[289.914px]" data-name="Container">
      <Label2 />
      <EmailInput1 />
    </div>
  );
}

function Label3() {
  return (
    <div className="absolute content-stretch flex h-[13.617px] items-start left-0 top-[2.2px] w-[29.897px]" data-name="Label">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[14.496px] relative shrink-0 text-[#364153] text-[10.147px]">Vai trò</p>
    </div>
  );
}

function TextInput2() {
  return (
    <div className="absolute bg-[#f9fafb] h-[29.849px] left-0 rounded-[7.248px] top-[17.4px] w-[289.914px]" data-name="Text Input">
      <div className="content-stretch flex items-center overflow-clip px-[11.597px] py-[5.798px] relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[17.395px] relative shrink-0 text-[#4a5565] text-[11.597px]">Người Làm Nông</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.439px] border-solid inset-0 pointer-events-none rounded-[7.248px]" />
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[47.248px] relative shrink-0 w-[289.914px]" data-name="Container">
      <Label3 />
      <TextInput2 />
    </div>
  );
}

function Label4() {
  return (
    <div className="absolute content-stretch flex h-[13.617px] items-start left-0 top-[2.2px] w-[46.171px]" data-name="Label">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[14.496px] relative shrink-0 text-[#364153] text-[10.147px]">Trạng thái</p>
    </div>
  );
}

function Text4() {
  return <div className="absolute bg-[#008236] left-0 rounded-[14739226px] size-[5.793px] top-[4.34px]" data-name="Text" />;
}

function Text3() {
  return (
    <div className="h-[14.489px] relative shrink-0 w-[59.76px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text4 />
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[14.496px] left-[11.59px] text-[#008236] text-[10.147px] top-[-1.45px]">Hoạt động</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute bg-[#f9fafb] content-stretch flex h-[30.44px] items-center left-0 pl-[12.031px] pr-[0.439px] py-[0.439px] rounded-[7.248px] top-[17.4px] w-[139.157px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.439px] border-solid inset-0 pointer-events-none rounded-[7.248px]" />
      <Text3 />
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute h-[47.839px] left-0 top-0 w-[139.157px]" data-name="Container">
      <Label4 />
      <Container27 />
    </div>
  );
}

function Label5() {
  return (
    <div className="absolute content-stretch flex h-[13.617px] items-start left-0 top-[2.2px] w-[67.235px]" data-name="Label">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[14.496px] relative shrink-0 text-[#364153] text-[10.147px]">Ngày gia nhập</p>
    </div>
  );
}

function TextInput3() {
  return (
    <div className="absolute bg-[#f9fafb] h-[29.849px] left-0 rounded-[7.248px] top-[17.4px] w-[139.164px]" data-name="Text Input">
      <div className="content-stretch flex items-center overflow-clip px-[11.597px] py-[5.798px] relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[17.395px] relative shrink-0 text-[#4a5565] text-[11.597px]">15/03/2024</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.439px] border-solid inset-0 pointer-events-none rounded-[7.248px]" />
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute h-[47.839px] left-[150.75px] top-0 w-[139.164px]" data-name="Container">
      <Label5 />
      <TextInput3 />
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[47.839px] relative shrink-0 w-[289.914px]" data-name="Container">
      <Container26 />
      <Container28 />
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[13px] items-start p-[17px] relative w-full">
        <Container19 />
        <Container21 />
        <Container22 />
        <Container23 />
        <Container24 />
        <Container25 />
      </div>
    </div>
  );
}

function Button14() {
  return (
    <div className="bg-white h-[26.953px] relative rounded-[7.248px] shrink-0 w-[49.438px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.439px] border-solid inset-0 pointer-events-none rounded-[7.248px] shadow-[0px_0.725px_2.174px_0px_rgba(0,0,0,0.1),0px_0.725px_1.45px_0px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[14.496px] left-[25.26px] text-[#364153] text-[10.147px] text-center top-[4.78px]">Đóng</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="bg-[#f9fafb] h-[62.176px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-solid border-t-[0.439px] inset-0 pointer-events-none" />
      <div className="flex flex-row justify-end size-full">
        <div className="content-stretch flex items-start justify-end pr-[17.392px] pt-[17.831px] relative size-full">
          <Button14 />
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[515px] items-start left-[344px] overflow-clip rounded-[10.147px] shadow-[0px_14.496px_18.12px_-3.624px_rgba(0,0,0,0.1),0px_5.798px_7.248px_-4.349px_rgba(0,0,0,0.1)] top-[33px] w-[325px]" data-name="Container">
      <Container17 />
      <Container18 />
      <Container29 />
    </div>
  );
}

function CreateWorkerModal() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.5)] h-[589px] left-[218px] top-[-5px] w-[1028px]" data-name="CreateWorkerModal">
      <Container16 />
    </div>
  );
}

function Icon12() {
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

function Container32() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon12 />
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

function Paragraph13() {
  return (
    <div className="content-stretch flex h-[15.994px] items-start opacity-80 relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#cbfbf1] text-[12px]">Quản trị hệ thống</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[33.996px] relative shrink-0 w-[94.555px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading />
        <Paragraph13 />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[80px] relative shrink-0 w-[255.994px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(0,150,137,0.3)] border-b-[0.606px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.998px] items-center pb-[0.606px] pl-[23.996px] relative size-full">
        <Container32 />
        <Container33 />
      </div>
    </div>
  );
}

function Icon13() {
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

function Text5() {
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
          <Icon13 />
          <Text5 />
        </div>
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_23_1368)" id="Icon">
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
          <clipPath id="clip0_23_1368">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text6() {
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
          <Icon14 />
          <Text6 />
        </div>
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_23_1363)" id="Icon">
          <path d={svgPaths.p23f63f00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p60ae280} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3a8e0680} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_23_1363">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text7() {
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
          <Icon15 />
          <Text7 />
        </div>
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_23_1359)" id="Icon">
          <path d={svgPaths.p26ddc800} id="Vector" stroke="var(--stroke-0, #CBFBF1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1b144480} id="Vector_2" stroke="var(--stroke-0, #CBFBF1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_23_1359">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text8() {
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
          <Icon16 />
          <Text8 />
        </div>
      </div>
    </div>
  );
}

function Icon17() {
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

function Text9() {
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
          <Icon17 />
          <Text9 />
        </div>
      </div>
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_23_1353)" id="Icon">
          <path d={svgPaths.p34aa4800} id="Vector" stroke="var(--stroke-0, #CBFBF1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p18406864} id="Vector_2" stroke="var(--stroke-0, #CBFBF1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2241fff0} id="Vector_3" stroke="var(--stroke-0, #CBFBF1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2c4f400} id="Vector_4" stroke="var(--stroke-0, #CBFBF1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_23_1353">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text10() {
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
          <Icon18 />
          <Text10 />
        </div>
      </div>
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_23_1349)" id="Icon">
          <path d={svgPaths.pe6b10c0} id="Vector" stroke="var(--stroke-0, #CBFBF1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p4c21d00} id="Vector_2" stroke="var(--stroke-0, #CBFBF1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_23_1349">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text11() {
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
          <Icon19 />
          <Text11 />
        </div>
      </div>
    </div>
  );
}

function Container34() {
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

function Container37() {
  return (
    <div className="absolute bg-[#96f7e4] content-stretch flex items-center justify-center left-[12px] rounded-[20336000px] size-[40px] top-[12px]" data-name="Container">
      <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#005f5a] text-[16px]">NA</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="content-stretch flex h-[19.991px] items-start overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[14px] text-white whitespace-pre-wrap">Nguyễn Văn A</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="content-stretch flex h-[15.994px] items-start overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#96f7e4] text-[12px] whitespace-pre-wrap">Chủ nông trại</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute content-stretch flex flex-col h-[35.985px] items-start left-[64px] top-[14.01px] w-[116.013px]" data-name="Container">
      <Paragraph14 />
      <Paragraph15 />
    </div>
  );
}

function Icon20() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_23_1342)" id="Icon">
          <path d={svgPaths.p3b7be120} id="Vector" stroke="var(--stroke-0, #CBFBF1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2817c200} id="Vector_2" stroke="var(--stroke-0, #CBFBF1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_23_1342">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container40() {
  return <div className="absolute bg-[#fb2c36] border-[#009689] border-[1.818px] border-solid left-[14px] rounded-[20336000px] size-[10px] top-[-4px]" data-name="Container" />;
}

function Container39() {
  return (
    <div className="absolute left-[192.01px] size-[20px] top-[22px]" data-name="Container">
      <Icon20 />
      <Container40 />
    </div>
  );
}

function Container36() {
  return (
    <div className="bg-[rgba(0,95,90,0.3)] h-[63.996px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <Container37 />
      <Container38 />
      <Container39 />
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[96.591px] relative shrink-0 w-[255.994px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(0,150,137,0.3)] border-solid border-t-[0.606px] inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16.6px] px-[15.994px] relative size-full">
        <Container36 />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute bg-[#009689] content-stretch flex flex-col h-[584px] items-start left-0 shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)] top-0 w-[241px]" data-name="Container">
      <Container31 />
      <Container34 />
      <Container35 />
    </div>
  );
}

export default function WorkerView() {
  return (
    <div className="bg-white relative size-full" data-name="Worker - View">
      <App />
      <CreateWorkerModal />
      <Container30 />
    </div>
  );
}