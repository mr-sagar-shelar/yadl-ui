import type { Meta, StoryObj } from "@storybook/react";
import Themeisle444 from "../Themeisle444";

const meta: Meta<typeof Themeisle444> = { title: "Themeisle/Themeisle444", component: Themeisle444 };

export default meta;
type Story = StoryObj<typeof Themeisle444>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
