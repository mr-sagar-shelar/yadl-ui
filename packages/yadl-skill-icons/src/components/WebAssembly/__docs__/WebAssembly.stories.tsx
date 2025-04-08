import type { Meta, StoryObj } from "@storybook/react";
import WebAssembly from "../WebAssembly";

const meta: Meta<typeof WebAssembly> = { title: "SkillIcon/WebAssembly", component: WebAssembly };

export default meta;
type Story = StoryObj<typeof WebAssembly>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
