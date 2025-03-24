import type { Meta, StoryObj } from "@storybook/react";
import Themeisle289 from "../Themeisle289";

const meta: Meta<typeof Themeisle289> = { title: "Themeisle/Themeisle289", component: Themeisle289 };

export default meta;
type Story = StoryObj<typeof Themeisle289>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
