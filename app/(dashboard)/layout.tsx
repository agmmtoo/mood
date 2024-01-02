const DashboardLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="h-screen w-screen relative">
      <aside className="absolute w-[200px] top-0 left-0 h-full border-r border-black/10">
        Mood
      </aside>
      <div className="ml-[200px]">
        <header className="h-16 border-b border-black/10">hello</header>
        <div>{children}</div>
      </div>
    </div>
  )
}

export default DashboardLayout
