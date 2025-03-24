import type { Meta, StoryObj } from "@storybook/react";
import CreativeProcess from "../CreativeProcess";

const meta: Meta<typeof CreativeProcess> = { title: "unDraw/CreativeProcess", component: CreativeProcess };

export default meta;
type Story = StoryObj<typeof CreativeProcess>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
