import type { Meta, StoryObj } from "@storybook/react";
import ImportExportJobs from "../ImportExportJobs";

const meta: Meta<typeof ImportExportJobs> = { title: "Azure/Storage/ImportExportJobs", component: ImportExportJobs };

export default meta;
type Story = StoryObj<typeof ImportExportJobs>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
