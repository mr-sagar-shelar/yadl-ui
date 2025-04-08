import type { Meta, StoryObj } from "@storybook/react";
import WebDevelopment from "../WebDevelopment";

const meta: Meta<typeof WebDevelopment> = { title: "unDraw/WebDevelopment", component: WebDevelopment };

export default meta;
type Story = StoryObj<typeof WebDevelopment>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
