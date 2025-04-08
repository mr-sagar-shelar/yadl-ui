import type { Meta, StoryObj } from "@storybook/react";
import WebDeveloper from "../WebDeveloper";

const meta: Meta<typeof WebDeveloper> = { title: "unDraw/WebDeveloper", component: WebDeveloper };

export default meta;
type Story = StoryObj<typeof WebDeveloper>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
