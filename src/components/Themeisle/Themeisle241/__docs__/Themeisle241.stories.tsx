import type { Meta, StoryObj } from "@storybook/react";
import Themeisle241 from "../Themeisle241";

const meta: Meta<typeof Themeisle241> = { title: "Themeisle/Themeisle241", component: Themeisle241 };

export default meta;
type Story = StoryObj<typeof Themeisle241>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
