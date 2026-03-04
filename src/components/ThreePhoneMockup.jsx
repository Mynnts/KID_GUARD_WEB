import React from "react";

/* ─── Shared UI Components ─── */

const PhoneFrame = ({ children, scale = 1, className = "" }) => (
    <div
        className={`relative bg-[#080808] rounded-[3.5rem] p-[10px] shadow-[0_40px_100px_-15px_rgba(0,0,0,0.6)] border-[8px] border-[#1a1a1a] ring-1 ring-white/10 transition-transform duration-700 ${className}`}
        style={{
            width: "320px",
            minWidth: "320px",
            height: "660px",
            transformOrigin: "center center",
            transform: `scale(${scale})`,
        }}
    >
        <div className="absolute top-[12px] left-1/2 -translate-x-1/2 w-28 h-7 bg-[#080808] rounded-full z-[100] flex items-center justify-center border border-white/5">
            <div className="w-9 h-[4px] bg-[#1a1a1a] rounded-full" />
        </div>
        <div className="relative w-full h-full bg-[#FAFAFC] rounded-[2.8rem] overflow-hidden flex flex-col font-['Itim'] select-none">
            {children}
        </div>
    </div>
);

/* ─── Screen 1 (Left): Child Home Screen (EXACT FLUTTER MATCH) ─── */

const ChildHomeScreenMock = () => (
    <div className="flex flex-col h-full bg-[#F6FBF4] overflow-y-auto hide-scrollbar">
        <div className="p-[24px] pt-[60px] flex flex-col items-center">
            {/* _buildPointsCard */}
            <div className="w-full bg-gradient-to-br from-[#6B9080] to-[#84A98C] p-[20px] rounded-[28px] shadow-lg shadow-[#6B9080]/25 flex items-center gap-[16px] text-white mb-9">
                <div className="w-[56px] h-[56px] bg-white/20 rounded-[16px] flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                    </svg>
                </div>
                <div className="flex-1">
                    <p className="text-white/80 text-[14px] font-medium leading-none">แต้มสะสม</p>
                    <p className="text-[28px] font-bold mt-1 leading-none">1,250 pts</p>
                </div>
                <div className="bg-white/20 px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-amber-300">
                        <path fillRule="evenodd" d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 0 0-.584.859 6.753 6.753 0 0 0 6.138 5.6 6.73 6.73 0 0 0 2.743 1.346v3.307H7.75a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-2.643v-3.307a6.73 6.73 0 0 0 2.743-1.346 6.753 6.753 0 0 0 6.138-5.6.75.75 0 0 0-.584-.859c-1.012-.213-2.036-.395-3.071-.543v-.858a1.5 1.5 0 0 0-1.5-1.5H6.666a1.5 1.5 0 0 0-1.5 1.5ZM6.666 2.621h10.668v.722a45.951 45.951 0 0 0-10.668 0v-.722Zm-3.922 2.56a48.113 48.113 0 0 0 3.155.336c.2.02.404.037.61.05v7.217a5.251 5.251 0 0 1-3.765-7.603Zm18.512 0a5.251 5.251 0 0 1-3.765 7.603V5.567c.206-.013.41-.031.61-.05a48.113 48.113 0 0 0 3.155-.336Z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[13px] font-bold">Level 13</span>
                </div>
            </div>

            {/* _buildShieldIcon */}
            <div className="w-[120px] h-[120px] rounded-full bg-gradient-to-br from-[#6B9080] to-[#84A98C] shadow-2xl shadow-[#6B9080]/30 flex items-center justify-center text-white mb-8 animate-pulse-soft">
                <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" />
                </svg>
            </div>

            <h2 className="text-[#1A1A2E] text-[28px] font-bold tracking-tight mb-2 leading-none">สวัสดี Junior</h2>
            <p className="text-[#6B7280] text-[15px] font-normal opacity-80 leading-none">โหมดป้องกันกำลังทำงาน</p>

            {/* _buildToggleSwitch */}
            <div className="mt-10 w-[88px] h-[48px] bg-gradient-to-r from-[#6B9080] to-[#84A98C] rounded-full p-1 flex items-center justify-end shadow-lg shadow-[#6B9080]/30">
                <div className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center shadow-sm">
                    <svg className="w-5 h-5 text-[#6B9080]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
            </div>

            {/* _buildStatusBadge */}
            <div className="mt-6 bg-[#10B981]/10 text-[#10B981] px-[20px] py-[10px] rounded-full font-bold text-[14px] border border-[#10B981]/25 flex items-center gap-2.5">
                <div className="w-2 h-2 bg-[#10B981] rounded-full" />
                กำลังป้องกัน
            </div>

            {/* _buildScreenTimeCard Section 1 */}
            <div className="mt-8 w-full bg-white p-5 rounded-[24px] border border-[#CCE3DE] shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 bg-[#CCE3DE] rounded-[14px] flex items-center justify-center text-[#6B9080]">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                </div>
                <div className="flex-1">
                    <p className="text-[#6B7280] text-[13px] font-medium">เวลาเล่นทั้งหมดวันนี้</p>
                    <p className="text-[26px] font-bold text-[#6B9080] leading-none">1ชม. 45น.</p>
                </div>
            </div>
        </div>
    </div>
);

/* ─── Screen 2 (Center): Role Selection (100% MATCH) ─── */

const RoleSelectionScreenMock = () => (
    <div className="flex flex-col h-full bg-[#FAFAFC] p-7 text-center overflow-hidden">
        <div className="flex-1 flex flex-col items-center pt-14">
            <div className="w-20 h-20 bg-[#779C85] rounded-[24px] shadow-[0_12px_24px_rgba(119,156,133,0.3)] flex items-center justify-center mb-7 overflow-hidden">
                <img src="/assets/Kid_Guard.png" alt="Logo" className="w-full h-full object-cover" />
            </div>
            <h1 className="text-[#1A1A2E] text-[34px] font-bold tracking-tight mb-2">Kid Guard</h1>
            <p className="text-[#6B7280] text-[15px] font-normal mb-14 tracking-wide">ปกป้อง ดูแล เข้าใจ</p>
            <div className="flex items-center gap-2.5 mb-8">
                <div className="w-1.5 h-1.5 bg-[#6B9080] rounded-full" />
                <span className="text-[#6B7280] text-[14px] font-medium opacity-80">เลือกบทบาทของคุณ</span>
            </div>
            <div className="w-full bg-white rounded-[24px] p-5 mb-4 shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-[#F0F0F5] flex items-center gap-4 cursor-pointer">
                <div className="w-[52px] h-[52px] bg-[#6B9080]/10 rounded-[18px] flex items-center justify-center text-[#6B9080]">
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                </div>
                <div className="flex-1 text-left">
                    <h4 className="text-[#1A1A2E] text-[18px] font-bold">ผู้ปกครอง</h4>
                    <p className="text-[#9CA3AF] text-[13px] font-normal mt-1.5 leading-tight">จัดการและดูแลกิจกรรมของลูก</p>
                </div>
                <svg className="w-4 h-4 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path d="M9 5l7 7-7 7" /></svg>
            </div>
            <div className="w-full bg-white rounded-[24px] p-5 shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-[#F0F0F5] flex items-center gap-4 cursor-pointer">
                <div className="w-[52px] h-[52px] bg-[#E67E22]/10 rounded-[18px] flex items-center justify-center text-[#E67E22]">
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div className="flex-1 text-left">
                    <h4 className="text-[#1A1A2E] text-[18px] font-bold">เด็ก</h4>
                    <p className="text-[#9CA3AF] text-[13px] font-normal mt-1.5 leading-tight">เชื่อมต่อกับบัญชีผู้ปกครอง</p>
                </div>
                <svg className="w-4 h-4 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path d="M9 5l7 7-7 7" /></svg>
            </div>
        </div>
        <div className="pb-10 flex items-center justify-center gap-2 text-[#9CA3AF] text-[13px] font-normal">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
            ปลอดภัยและเป็นส่วนตัว
        </div>
    </div>
);

/* ─── Screen 3 (Right): Parent Dashboard (EXACT FLUTTER MATCH) ─── */

const ParentDashboardScreenMock = () => (
    <div className="flex flex-col h-full bg-white overflow-y-auto hide-scrollbar">
        {/* HomeHeaderWidget */}
        <div className="px-6 pt-[56px] pb-5 flex items-center justify-between">
            <div className="flex flex-col">
                <span className="text-[#9CA3AF] text-[15px] font-normal">Good Afternoon,</span>
                <span className="text-[#1F2937] text-[26px] font-bold leading-none mt-1.5">Parent</span>
            </div>
            <div className="flex items-center gap-3">
                <div className="w-[48px] h-[48px] bg-white rounded-[16px] border border-[#F0F0F5] shadow-sm flex items-center justify-center">
                    <div className="relative">
                        <svg className="w-6 h-6 text-[#94A3B8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" /></svg>
                        <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-[#EF4444] rounded-full border-2 border-white" />
                    </div>
                </div>
                <div className="w-[48px] h-[48px] bg-gradient-to-br from-[#6B9080] to-[#CCE3DE] rounded-[16px] flex items-center justify-center text-white font-bold text-[18px]">P</div>
            </div>
        </div>

        <div className="px-6 pb-24">
            {/* _buildSectionHeader + Carousel */}
            <div className="flex items-center justify-between mb-4">
                <h4 className="text-[#1F2937] text-[20px] font-bold">My Children</h4>
                <span className="text-[#6B9080] text-[12px] font-bold bg-[#6B9080]/10 px-3 py-1.5 rounded-[10px]">See All</span>
            </div>
            <div className="flex gap-4 mb-8 overflow-hidden">
                <div className="flex-shrink-0 w-[140px] h-[160px] p-4 rounded-[28px] bg-gradient-to-br from-[#6B9080] to-[#84A98C] shadow-lg shadow-[#6B9080]/20 flex flex-col justify-between">
                    <div className="flex justify-between">
                        <div className="relative">
                            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                                    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-[#6B9080]" />
                        </div>
                        <div className="bg-white/20 px-2.5 py-1 rounded-lg text-[10px] font-bold text-white uppercase">Active</div>
                    </div>
                    <div>
                        <p className="text-white text-[16px] font-bold leading-none">Junior</p>
                        <div className="flex items-center gap-1 mt-1.5 opacity-80">
                            <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" /></svg>
                            <span className="text-white text-[11px] font-medium">1h 45m</span>
                        </div>
                    </div>
                </div>
                <div className="flex-shrink-0 w-[140px] h-[160px] p-4 rounded-[28px] bg-white border border-[#F0F5F2] flex flex-col justify-between">
                    <div className="flex justify-between">
                        <div className="w-12 h-12 rounded-full bg-[#f2f6f3] flex items-center justify-center text-slate-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                        </div>
                        <div className="bg-slate-50 px-2.5 py-1 rounded-lg text-[10px] font-bold text-slate-400 uppercase">Offline</div>
                    </div>
                    <div>
                        <p className="text-[#1F2937] text-[16px] font-bold leading-none">Sarah</p>
                        <p className="text-slate-400 text-[11px] font-medium mt-1.5">Last seen 2h ago</p>
                    </div>
                </div>
            </div>

            {/* StatsCardWidget */}
            <div className="bg-gradient-to-br from-[#6B9080] to-[#84A98C] p-6 rounded-[32px] shadow-xl shadow-[#6B9080]/15 mb-8">
                <div className="flex justify-between mb-5">
                    <div>
                        <span className="text-white/80 text-[14px] font-medium tracking-wide">Screen Time Today</span>
                        <div className="flex items-baseline text-white mt-1.5 gap-1.5">
                            <span className="text-[52px] font-bold leading-none tracking-tighter">1</span>
                            <span className="text-[24px] font-normal opacity-70 leading-none">h</span>
                            <span className="text-[52px] font-bold leading-none tracking-tighter ml-1">45</span>
                            <span className="text-[24px] font-normal opacity-70 leading-none">m</span>
                        </div>
                    </div>
                    <div className="w-20 h-20 bg-white/10 rounded-[22px] flex items-center justify-center relative">
                        <svg className="w-[52px] h-[52px] rotate-[-90deg]">
                            <circle cx="26" cy="26" r="22" stroke="rgba(255,255,255,0.2)" strokeWidth="6" fill="transparent" />
                            <circle cx="26" cy="26" r="22" stroke="white" strokeWidth="6" fill="transparent" strokeDasharray="138" strokeDashoffset="48" strokeLinecap="round" />
                        </svg>
                        <span className="absolute text-[12px] font-black text-white">65%</span>
                    </div>
                </div>
                <div className="bg-white/12 p-3.5 rounded-[16px] flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M2.25 13.5a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75v-.75Zm3.364-1.838a.75.75 0 0 1 1.06 0l.75.75a.75.75 0 1 1-1.06 1.06l-.75-.75a.75.75 0 0 1 0-1.06Zm12.728 0a.75.75 0 0 1 0 1.06l-.75.75a.75.75 0 1 1-1.06-1.06l.75-.75a.75.75 0 0 1 1.06 0Zm1.838 1.838a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-.75.75h-.75a.75.75 0 0 1-.75-.75v-.75Zm-6.192-3.834a.75.75 0 0 1 0 1.06l-.75.75a.75.75 0 1 1-1.06-1.06l.75-.75a.75.75 0 0 1 1.06 0Zm3.834 0a.75.75 0 0 1 1.06 0l.75.75a.75.75 0 1 1-1.06 1.06l-.75-.75a.75.75 0 0 1 0-1.06ZM12 4.5a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0v-.75A.75.75 0 0 1 12 4.5ZM.75 12a.75.75 0 0 1 .75.75h.142c.448 0 .808.363.808.811 0 .393-.275.698-.59.8a3.75 3.75 0 1 0 4.643 4.643c.102-.315.407-.59.8-.59.448 0 .811.36.811.808v.142a.75.75 0 0 1-1.5 0v-.118a2.25 2.25 0 1 1-2.924-2.924h.118a.75.75 0 0 1 0 1.5h-.118a.75.75 0 1 0 1.424 1.424v-.118a.75.75 0 0 1 1.5 0v.118a3.75 3.75 0 0 1-3.75 3.75H5.25a3.75 3.75 0 0 1-3.75-3.75v-.75a3.75 3.75 0 0 1 3.75-3.75h.75a.75.75 0 0 1 0 1.5H5.25a2.25 2.25 0 0 0-2.25 2.25v.75a2.25 2.25 0 1 0 4.5 0v-.75a.75.75 0 0 1 .75-.75H12Z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <span className="text-white text-[14px] font-medium flex-1">12% less than yesterday</span>
                    <svg className="w-3.5 h-3.5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path d="M9 5l7 7-7 7" /></svg>
                </div>
            </div>

            {/* DeviceStatusWidget */}
            <div className="bg-white p-5 rounded-[28px] border border-[#F0F5F2] shadow-sm mb-8 flex items-center gap-4">
                <div className="w-14 h-14 bg-[#10B981]/10 rounded-[18px] flex items-center justify-center">
                    <div className="w-4 h-4 bg-[#10B981] rounded-full shadow-[0_0_12px_rgba(16,185,129,0.5)] animate-pulse" />
                </div>
                <div className="flex-1">
                    <p className="text-[#10B981] text-[17px] font-bold leading-none">Device Online</p>
                    <p className="text-[#9CA3AF] text-[14px] font-normal mt-1 leading-none">Active now</p>
                </div>
                <div className="bg-[#6B9080]/10 px-4 py-2 rounded-[12px] text-[#6B9080] text-[13px] font-bold">Details</div>
            </div>

            {/* QuickActionsWidget */}
            <h4 className="text-[#1F2937] text-[18px] font-bold mb-4">Quick Actions</h4>
            <div className="grid grid-cols-3 gap-3">
                {[
                    { l: 'Time Limit', path: 'M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z', c: '#6B9080' },
                    { l: 'App Block', path: 'M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636', c: '#EF4444' },
                    { l: 'Location', path: 'M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z', c: '#3B82F6' },
                    { l: 'Schedule', path: 'M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z', c: '#F59E0B' },
                    { l: 'Pause', path: 'M6 18.75V5.25A2.25 2.25 0 0 1 8.25 3h7.5a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 15.75 21h-7.5A2.25 2.25 0 0 1 6 18.75ZM9 6v12M15 6v12', c: '#EF4444' },
                    { l: 'Rewards', path: 'M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.425 4.755 4.115 4.115 0 0 0 3.843 5.372 4.115 4.115 0 0 0 3.843-5.372 50.636 50.636 0 0 0-2.425-4.755m15.482 0a50.636 50.636 0 0 1 2.425 4.755 4.115 4.115 0 0 1-3.843 5.372 4.115 4.115 0 0 1-3.843-5.372 50.636 50.636 0 0 1 2.425-4.755m-15.482 0L12 2.25l10.125 7.897', c: '#8B5CF6' },
                ].map((a, i) => (
                    <div key={i} className="bg-white rounded-[22px] border border-[#F0F5F2] p-2 aspect-square flex flex-col items-center justify-center shadow-sm active:scale-95 transition-all">
                        <div className="w-13 h-13 rounded-full flex items-center justify-center mb-2" style={{ backgroundColor: a.c + '15', color: a.c }}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d={a.path} />
                            </svg>
                        </div>
                        <span className="text-[#3F4E4F] text-[11px] font-bold tracking-wide">{a.l}</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const ThreePhoneMockup = () => {
    return (
        <div className="relative w-full max-w-2xl px-4 py-12 sm:py-24 flex items-center justify-center scale-[0.55] sm:scale-[0.65] md:scale-[0.7] lg:scale-[0.85]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[160%] -z-10 pointer-events-none">
                <div className="absolute top-[10%] right-[10%] w-[600px] h-[600px] bg-[#6B9080]/15 rounded-full blur-[100px]" />
                <div className="absolute bottom-[10%] left-[10%] w-[700px] h-[700px] bg-[#CCE3DE]/25 rounded-full blur-[120px]" />
            </div>

            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[95px] z-10 opacity-70 scale-[0.88] -rotate-[12deg] transition-all duration-700 hover:opacity-100 hover:rotate-0 hover:scale-[1.0] hover:z-40 cursor-pointer animate-float hidden sm:block" style={{ animationDelay: '-1.5s' }}>
                <PhoneFrame scale={0.9}>
                    <ChildHomeScreenMock />
                </PhoneFrame>
            </div>

            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[95px] z-10 opacity-70 scale-[0.90] rotate-[10deg] transition-all duration-700 hover:opacity-100 hover:rotate-0 hover:scale-[1.0] hover:z-40 cursor-pointer animate-float hidden sm:block" style={{ animationDelay: '-3s' }}>
                <PhoneFrame scale={0.92}>
                    <ParentDashboardScreenMock />
                </PhoneFrame>
            </div>

            <div className="relative z-20 animate-float">
                <div className="absolute -inset-24 bg-[#6B9080]/15 rounded-full blur-[80px] -z-10" />
                <PhoneFrame scale={1}>
                    <RoleSelectionScreenMock />
                </PhoneFrame>
            </div>

            <div className="absolute -top-16 -right-20 z-50 bg-white/95 backdrop-blur-md shadow-2xl rounded-[24px] p-6 border border-white/40 flex items-center gap-4 animate-float hidden lg:flex" style={{ animationDelay: '-0.8s' }}>
                <div className="w-14 h-14 bg-gradient-to-br from-[#6B9080] to-[#84A98C] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-[#6B9080]/30 text-3xl">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                    </svg>
                </div>
                <div className="pr-4">
                    <p className="text-[11px] text-slate-400 font-bold uppercase tracking-widest leading-none mb-1">Kid Guard App</p>
                    <p className="text-[16px] font-bold text-[#1F2937]">Protection Live</p>
                </div>
            </div>
        </div>
    );
};

export default ThreePhoneMockup;
