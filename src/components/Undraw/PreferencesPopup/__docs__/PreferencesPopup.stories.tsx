import type { Meta, StoryObj } from "@storybook/react";
import PreferencesPopup from "../PreferencesPopup";

const meta: Meta<typeof PreferencesPopup> = { title: "unDraw/PreferencesPopup", component: PreferencesPopup };

export default meta;
type Story = StoryObj<typeof PreferencesPopup>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
