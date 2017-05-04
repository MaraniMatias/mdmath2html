# Contenido

[[toc]]


underline_in_word

_underline_italic_

## strike through

  ~~strikeThrough~~
  xx~~strikeThrough~~yy

  -  in list~~strikeThrough~~yy
   -  in list~~strikeThrough~~yy

  >  in block~~strikeThrough~~yy
  
  ~~multi line~~

  **  in bold~~strikeThrough~~yyy **

  |  Cool |
  | ------:|
  | 1~~strikeThrough~~ |

  ##In Table

  |  Cool  |
  |:------ |
  | 1600 http: //abc.com |

```
xx~~notStrikeThrough~~yy
```

\`\`\`[[0,1,0],[0,1,5]]\`\`\`

\begin{align}
 E &= mc^2                              \\
 m &= \frac{m_0}{\sqrt{1-\frac{v^2}{c^2}}}
\end{align}

\begin{equation} \begin{pmatrix} 1 & 0\ 0 & 1 \end{pmatrix} \end{equation}

###### text after tex

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| **col 3 is**  | right-aligned | $1600 |
| col 2 is      | *centered*    |   $12 |
| zebra stripes | ~~are neat~~  |    $1 |

$\sqrt{3x-1}+(1+x)^2$
**Alpha**, _bravo_, and ~~Charlie~~.
# Math Rulez! **Bold**
$$H_{2}0$$

Agua: \`H_{2}0\`

I am using __markdown__.
$\sqrt{3x-1}+(1+x)^2$
$1 *2* 3$

When $a \ne 0$, there are two solutions to \(ax^2 + bx + c = 0\) and they are
$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$

$$E = mc^2$$

\`@(1/2[1-(1/2)^n])/(1-(1/2))=s_n@\`

\`
\E_c=( (a+5)^1 )/ (2)
\`

\`\`\`math
\int_C x^3\ dx + 4y^2\ dy
\`\`\`

\`\`\`AsciiMath
\oint_Cx^3 dx+4y^2 dy
\`\`\`

\`sum_(i=1)^n i^3=((n(n+1))/2)^2\`

\`lim_(x->oo) int_0^1 f(x)dx\`

$$ce{^{227}_{90}Th+}$$

\\(ce{^{227}_{90}Th+}\\)

\\[
(x_{1}+x_{2})^2=x_{1}^{2}+2x_{1}x_{2}+x_{2}^{2}
\\]

\\[X+a ≥â ⎯⎯∑iNlimx→kδC\\]

\\begin{array}{cc}
  a & b \\\\
  c & c
\\end{array}

\\[
\frac{1}{5}+\frac{1}{3}=\frac{3+5}{5 \cdot 3}=\frac{8}{15}
\\]

\\({_p}VC\frac{dT}{dt} = wC(T_i-T)+q\\) *`(1.3)`*

$${_{90}T}$$

\\({_{90}T}\\)

\\(\boxed{\text{boxed text}}\\)
\\(a+{b+c\brace d+e}+f\\)
\\( \buildrel \alpha\beta \over \longrightarrow \\)

\\(|x| = \cases{ x  & \text{if } x\ge 0\cr -x & \text{if } x\lt 0 }\\)

\`|x|= { (x , if x ge 0 text(,)) , (-x , if x <0.):}}\`

\\(\overleftarrow{\text{the argument}}\\)
\\(\underleftrightarrow{\hspace1in}\\)

### Transformada de la derivada.

\`L{(df(t))/(dt)}= f(s)s-f(0)\` *`(2.2)`*
donde \`f(s)=L{f(s)}\` y \`f(0)\` es \`f(t) con t=0\`

*Probamos*

\`L{(df(t))/(dt)}=\int_0^oo (df)/(dt)e^{-st}dt\`

> *Por partes* 
> \`\int udv=uv-\int udu\`
>
> \`u=e^{-st}\` \`du=(df)/(dt)dt => du = -se^{-st}dt \and  u = f(t)\`

\`\int_0^oo (df)/(dt)e^{-st}dt = [f(t)e^{-st}]_0^oo + s \int_0^oo f(t)e^{-st}dt=-f(0)+f(s)s\`

Para encontrar la transformada de la segunda derivada, hacemos uso de la transformada de la primera derivada dos veces, como sigue:

\`L{(d^2f)/(dt^2)}=L{d/(dt)((df)/(dt))=sL{(df)/(dt)}-(df(t))/(dt)|_{t=0}\`

\`= s[s^1f(s)-f(0)]-f^'(0)\`
\`= s^2f(s)-s^1f(0)-f^'(0)\`

Nota:
 >\`(df(t))/(dt)|_{t=0}\`\`= f^'(0)\`

\`L{(d^nf)/(dt^n)}=s^nf(s)-s^{n-1}f(0)-s^{n-2}f^(1)(0)- … - s^1f^{n-2}(0)-f^(n-1)(0)\`

*Ejemplos*
> Encontrar la transformada de Laplace de la funcion \`x(t)\`
>
> Condiciones iniciales.
> \`x(0)=(dx(t))/(dt)=(d^2x(0))/(dt^2)=0\`
>
> \`(d^3x)/(dt^3) + 4 (d^2x)/(dt^2) + 5(dx)/(dt) + 2x = 2\`
