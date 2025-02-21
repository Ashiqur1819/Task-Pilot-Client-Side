const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-50 text-base-content p-4 mt-12">
      <aside>
        <p>
          Copyright ©{new Date().getFullYear()} - All Rights Reserved by{" "}
          <span className="text-green-600 font-medium">TaskPilot</span>
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
