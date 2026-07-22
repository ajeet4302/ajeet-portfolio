function Footer() {
  return (
    <footer className="bg-black py-8 text-center text-slate-400">
      <h3 className="text-white text-xl font-bold">
        Ajeet Malviya
      </h3>

      <p className="mt-3">
        Java Full Stack Developer
      </p>

      <p className="mt-6 text-sm">
        © {new Date().getFullYear()} Ajeet Malviya. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;