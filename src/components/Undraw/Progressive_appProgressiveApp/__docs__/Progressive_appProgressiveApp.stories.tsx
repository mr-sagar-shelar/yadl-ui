import type { Meta, StoryObj } from "@storybook/react";
import Progressive_appProgressiveApp from "../Progressive_appProgressiveApp";

const meta: Meta<typeof Progressive_appProgressiveApp> = { title: "unDraw/Progressive_appProgressiveApp", component: Progressive_appProgressiveApp };

export default meta;
type Story = StoryObj<typeof Progressive_appProgressiveApp>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
