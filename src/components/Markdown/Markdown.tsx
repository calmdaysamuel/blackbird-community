import React, { Component } from "react";
import ReactDom from "react-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark as dark } from "react-syntax-highlighter/dist/esm/styles/prism";

import "./Markdown.scss";
export default class Markdown extends Component<{ markdown: string }> {
  constructor(props: any) {
    super(props);
    this.markdown = this.props.markdown;
  }
  markdown: string;

  render() {
    return (
      <ReactMarkdown
        className="markdown"
        children={this.markdown}
        remarkPlugins={[remarkGfm]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, "")}
                style={dark}
                language={match[1]}
                PreTag="div"
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      />
    );
  }
}
