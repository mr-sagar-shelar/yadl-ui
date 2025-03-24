import type { Meta, StoryObj } from "@storybook/react";
import Tauri from "../Tauri";

const meta: Meta<typeof Tauri> = { title: "SkillSet/Tauri", component: Tauri };

export default meta;
type Story = StoryObj<typeof Tauri>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
