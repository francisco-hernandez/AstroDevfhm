# Component Library

## Button Components

### Primary Button
```astro
---
// ButtonPrimary.astro
interface Props {
  text: string;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

const { 
  text, 
  href, 
  onClick, 
  disabled = false, 
  size = 'md',
  fullWidth = false 
} = Astro.props;

const baseClasses = "inline-flex items-center justify-center font-bold rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2";
const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg"
};
const widthClasses = fullWidth ? "w-full" : "";
const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "hover:scale-105 active:scale-95";

const classes = `${baseClasses} ${sizeClasses[size]} ${widthClasses} ${disabledClasses} bg-primary text-white shadow-lg shadow-primary/20`;
---

{href ? (
  <a href={href} class={classes} disabled={disabled}>
    {text}
  </a>
) : (
  <button class={classes} onClick={onClick} disabled={disabled}>
    {text}
  </button>
)}
```

### Secondary Button
```astro
---
// ButtonSecondary.astro
interface Props {
  text: string;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const { text, href, onClick, disabled = false, size = 'md' } = Astro.props;

const baseClasses = "inline-flex items-center justify-center font-bold rounded-full border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2";
const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg"
};
const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-surface-container-low active:scale-95";

const classes = `${baseClasses} ${sizeClasses[size]} ${disabledClasses} border-primary text-primary bg-transparent hover:bg-surface-container-low`;
---

{href ? (
  <a href={href} class={classes} disabled={disabled}>
    {text}
  </a>
) : (
  <button class={classes} onClick={onClick} disabled={disabled}>
    {text}
  </button>
)}
```

## Card Components

### Base Card
```astro
---
// Card.astro
interface Props {
  title: string;
  description?: string;
  image?: string;
  badge?: string;
  actions?: boolean;
  featured?: boolean;
}

const { title, description, image, badge, actions = false, featured = false } = Astro.props;

const cardClasses = featured 
  ? "bg-gradient-to-br from-primary to-secondary text-white"
  : "bg-surface-container-lowest text-on-surface";

const imageClasses = featured
  ? "opacity-90"
  : "opacity-60 group-hover:opacity-100";
---

<div class={`group relative overflow-hidden rounded-3xl shadow-sm hover:shadow-xl transition-all ${cardClasses}`}>
  {image && (
    <div class="relative h-48 overflow-hidden">
      <img 
        src={image} 
        alt={title}
        class={`w-full h-full object-cover transition-opacity duration-500 ${imageClasses}`}
      />
      {badge && (
        <div class="absolute top-4 left-4">
          <span class="px-3 py-1 bg-primary text-white text-xs font-bold uppercase rounded-full">
            {badge}
          </span>
        </div>
      )}
    </div>
  )}
  
  <div class="p-6">
    <h3 class="text-xl font-bold font-headline mb-2 group-hover:text-primary transition-colors">
      {title}
    </h3>
    
    {description && (
      <p class="text-on-surface-variant text-sm mb-4 leading-relaxed">
        {description}
      </p>
    )}
    
    {actions && (
      <div class="flex items-center gap-2 text-primary font-bold group">
        <span>Learn more</span>
        <span class="material-symbols-outlined group-hover:translate-x-2 transition-transform">
          arrow_forward
        </span>
      </div>
    )}
  </div>
</div>
```

### Service Card
```astro
---
// ServiceCard.astro
interface Props {
  number: string;
  title: string;
  description: string;
  icon: string;
  color: 'primary' | 'secondary' | 'tertiary';
  image?: string;
}

const { number, title, description, icon, color, image } = Astro.props;

const colorClasses = {
  primary: 'bg-primary text-white',
  secondary: 'bg-secondary text-white',
  tertiary: 'bg-tertiary text-white'
};

const bgClasses = {
  primary: 'bg-[#1A1C1C]',
  secondary: 'bg-[#2D5BFF]',
  tertiary: 'bg-[#C1FF00]'
};
---

<div class={`md:col-span-2 md:row-span-2 ${bgClasses[color]} text-white p-8 rounded-3xl shadow-sm group hover:shadow-xl transition-all relative overflow-hidden flex flex-col justify-between`}>
  <span class="absolute -top-6 -right-6 text-[12rem] font-black text-white/5 font-headline pointer-events-none transition-all duration-300 group-hover:text-white/30 group-hover:scale-125 group-hover:-translate-x-8 group-hover:translate-y-8">
    {number}
  </span>
  
  <div>
    <span class="material-symbols-outlined text-5xl mb-4 block">
      {icon}
    </span>
    <h3 class="text-2xl font-bold mb-3 font-headline">
      {title}
    </h3>
    <p class="text-white/80 text-lg mb-4 leading-relaxed">
      {description}
    </p>
  </div>
  
  {image && (
    <img 
      src={image} 
      alt={title}
      class="w-full h-28 object-cover rounded-2xl opacity-60 group-hover:opacity-100 transition-opacity mt-2"
    />
  )}
</div>
```

## Navigation Components

### Navigation Link
```astro
---
// NavLink.astro
interface Props {
  href: string;
  text: string;
  isActive?: boolean;
  isMobile?: boolean;
}

const { href, text, isActive = false, isMobile = false } = Astro.props;

const baseClasses = isMobile
  ? "text-3xl font-black font-headline opacity-60 hover:opacity-100 dark:text-white dark:opacity-80 dark:hover:opacity-100"
  : "text-lg font-bold font-headline text-on-surface-variant dark:text-white/80 hover:text-primary dark:hover:text-white transition-colors duration-300";

const activeClasses = isActive ? "nav-link-active text-primary" : "";
---

<a href={href} class={`${baseClasses} ${activeClasses} nav-link`}>
  {text}
</a>
```

### Mobile Menu
```astro
---
// MobileMenu.astro
interface Props {
  isOpen: boolean;
}

const { isOpen } = Astro.props;
---

<div id="mobile-menu" class={`fixed inset-0 z-40 bg-background/95 dark:bg-black/95 backdrop-blur-3xl hidden flex-col items-center justify-center gap-8 md:hidden transition-opacity duration-300 ${isOpen ? 'flex opacity-100' : 'opacity-0'}`}>
  <slot />
</div>
```

## Form Components

### Input Field
```astro
---
// InputField.astro
interface Props {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'tel' | 'textarea';
  placeholder?: string;
  required?: boolean;
  error?: string;
  value?: string;
}

const { 
  label, 
  name, 
  type = 'text', 
  placeholder, 
  required = false, 
  error,
  value 
} = Astro.props;

const inputClasses = `w-full bg-transparent border-0 border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 focus:outline-none px-0 py-3 transition-all text-on-surface ${error ? 'border-error' : ''}`;
---

<div class="space-y-2">
  <label class="text-sm font-bold font-epilogue text-on-surface uppercase tracking-widest" for={name}>
    {label}
    {required && <span class="text-error ml-1">*</span>}
  </label>
  
  {type === 'textarea' ? (
    <textarea 
      id={name}
      name={name}
      class={`${inputClasses} resize-none`}
      placeholder={placeholder}
      required={required}
    >{value}</textarea>
  ) : (
    <input 
      id={name}
      name={name}
      type={type}
      class={inputClasses}
      placeholder={placeholder}
      required={required}
      value={value}
    />
  )}
  
  {error && (
    <p class="text-error text-sm font-medium">
      {error}
    </p>
  )}
</div>
```

### Contact Form
```astro
---
// ContactForm.astro
---

<form class="space-y-6" method="POST" action="/api/contact">
  <InputField 
    label="Nombre Completo"
    name="nombre"
    placeholder="Ej. Juan Pérez"
    required
  />
  
  <InputField 
    label="Email Corporativo"
    name="email"
    type="email"
    placeholder="tu@empresa.com"
    required
  />
  
  <InputField 
    label="Tipo de Proyecto"
    name="proyecto"
    placeholder="Ej. Ecommerce"
  />
  
  <InputField 
    label="Mensaje"
    name="mensaje"
    type="textarea"
    placeholder="Cuéntanos sobre tu proyecto..."
    required
  />
  
  <button 
    type="submit"
    class="w-full bg-primary text-white py-4 rounded-full font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-primary/30 mt-4"
  >
    Enviar Mensaje
  </button>
</form>
```

## Layout Components

### Section Container
```astro
---
// Section.astro
interface Props {
  id?: string;
  background?: 'surface' | 'surface-container' | 'surface-container-low' | 'primary';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const { id, background = 'surface', padding = 'lg', className = '' } = Astro.props;

const backgroundClasses = {
  surface: 'bg-surface',
  'surface-container': 'bg-surface-container',
  'surface-container-low': 'bg-surface-container-low',
  primary: 'bg-primary text-white'
};

const paddingClasses = {
  sm: 'py-12 px-6',
  md: 'py-16 px-6',
  lg: 'py-24 px-6',
  xl: 'py-32 px-6'
};
---

<section id={id} class={`${backgroundClasses[background]} ${paddingClasses[padding]} ${className}`}>
  <div class="max-w-7xl mx-auto">
    <slot />
  </div>
</section>
```

### Grid Container
```astro
---
// Grid.astro
interface Props {
  cols?: 1 | 2 | 3 | 4 | 6 | 12;
  gap?: 'sm' | 'md' | 'lg';
  className?: string;
}

const { cols = 3, gap = 'md', className = '' } = Astro.props;

const colsClasses = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  6: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6',
  12: 'grid-cols-12'
};

const gapClasses = {
  sm: 'gap-4',
  md: 'gap-6',
  lg: 'gap-8'
};
---

<div class={`grid ${colsClasses[cols]} ${gapClasses[gap]} ${className}`}>
  <slot />
</div>
```

## Content Components

### Blog Card
```astro
---
// BlogCard.astro
interface Props {
  title: string;
  description: string;
  image: string;
  category: string;
  href: string;
  readTime: string;
}

const { title, description, image, category, href, readTime } = Astro.props;
---

<article class="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col group">
  <a href={href} class="block flex flex-col h-full">
    <div class="relative h-64 overflow-hidden">
      <img 
        src={image} 
        alt={title}
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div class="absolute top-4 left-4">
        <span class="px-3 py-1 bg-primary text-white text-[10px] font-bold uppercase rounded-full">
          {category}
        </span>
      </div>
    </div>
    
    <div class="p-8 flex-grow">
      <h3 class="text-2xl font-bold font-headline mb-4 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p class="text-on-surface-variant text-sm mb-8 leading-relaxed line-clamp-2">
        {description}
      </p>
      <div class="flex items-center justify-between">
        <div class="inline-flex items-center gap-2 text-primary font-bold group">
          <span>Leer más</span>
          <span class="material-symbols-outlined group-hover:translate-x-2 transition-transform">
            arrow_forward
          </span>
        </div>
        <span class="text-on-surface-variant text-xs">
          {readTime}
        </span>
      </div>
    </div>
  </a>
</article>
```

### FAQ Item
```astro
---
// FAQItem.astro
interface Props {
  question: string;
  answer: string;
  isOpen?: boolean;
}

const { question, answer, isOpen = false } = Astro.props;
---

<div class="bg-surface-container-low rounded-3xl overflow-hidden border border-outline-variant/10 transition-colors">
  <button class="w-full flex justify-between items-center p-8 text-left group" onclick="toggleFaq(this)">
    <span class="text-xl font-bold font-headline">
      {question}
    </span>
    <span class="material-symbols-outlined text-on-surface group-hover:-translate-y-1 transition-transform">
      expand_more
    </span>
  </button>
  
  <div class={`px-8 pb-8 text-on-surface-variant leading-relaxed ${isOpen ? '' : 'hidden'}`}>
    {answer}
  </div>
</div>
```

## Utility Components

### Badge
```astro
---
// Badge.astro
interface Props {
  text: string;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const { text, variant = 'primary', size = 'md' } = Astro.props;

const variantClasses = {
  primary: 'bg-primary text-white',
  secondary: 'bg-secondary text-white',
  tertiary: 'bg-tertiary text-white',
  outline: 'border border-outline text-on-surface'
};

const sizeClasses = {
  sm: 'px-2 py-1 text-xs',
  md: 'px-3 py-1 text-sm',
  lg: 'px-4 py-2 text-base'
};
---

<span class={`inline-flex items-center rounded-full font-bold uppercase tracking-widest ${variantClasses[variant]} ${sizeClasses[size]}`}>
  {text}
</span>
```

### Icon
```astro
---
// Icon.astro
interface Props {
  name: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const { name, size = 'md', className = '' } = Astro.props;

const sizeClasses = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl'
};
---

<span class={`material-symbols-outlined ${sizeClasses[size]} ${className}`}>
  {name}
</span>
```

---

**Component Version**: 1.0.0  
**Last Updated**: April 2026  
**Review Frequency**: Monthly
