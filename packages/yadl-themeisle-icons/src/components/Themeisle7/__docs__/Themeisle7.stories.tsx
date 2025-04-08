import type { Meta, StoryObj } from "@storybook/react";
import Themeisle7 from "../Themeisle7";

const meta: Meta<typeof Themeisle7> = { title: "Themeisle/Themeisle7", component: Themeisle7 };

export default meta;
type Story = StoryObj<typeof Themeisle7>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
