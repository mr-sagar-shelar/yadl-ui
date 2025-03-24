import type { Meta, StoryObj } from "@storybook/react";
import InternetAnalyzerProfiles from "../InternetAnalyzerProfiles";

const meta: Meta<typeof InternetAnalyzerProfiles> = { title: "Azure/Other/InternetAnalyzerProfiles", component: InternetAnalyzerProfiles };

export default meta;
type Story = StoryObj<typeof InternetAnalyzerProfiles>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
